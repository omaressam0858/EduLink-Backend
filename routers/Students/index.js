const Router = require('express').Router()
const {Student, Group,Attendees} = require('../../models/index')

const AttendeeRouter = require('./attendee')

Router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll({
            include: [Group]
        })
        res.status(200).json(students)
    } catch (error) {
        next(error)
    }
})

Router.post('/', async (req, res, next) => {
    try {
        const group = await Group.findByPk(req.body.groupId)
        if(!group) return next({status: 404, message: 'Group not found', code: 'not_found'})
        const student = await Student.create({
            name: req.body.name,
            personalPhoneNumber: req.body.personalPhoneNumber,
            parentPhoneNumber: req.body.parentPhoneNumber,
            groupId: req.body.groupId
        })
        res.status(200).json(student)
    } catch (error) {
        if(error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError' || error.parent.code === '22P02'){
            return next({status: 400, message: error.message,code: "invalid_json"})
        }
        next(error)
    }
})

Router.get('/:id', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id, {
            include: [Group]
        })
        if(!student) return next({status: 404, message: 'Student not found', code: 'not_found'})
        res.status(200).json(student)
    } catch (error) {
        next(error)
    }
})







Router.use('/attendees', AttendeeRouter)






module.exports = Router