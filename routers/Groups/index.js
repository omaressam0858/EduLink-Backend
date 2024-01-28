const Router = require('express').Router()
const {Group, GroupSchedule,Student} = require('../../models/index')

Router.get('/', async (req, res, next) => {
    try {
        const groups = await Group.findAll({
            include: [GroupSchedule,Student]
        })
        res.status(200).json(groups)
    } catch (error) {
        next(error)
    }
})

Router.post('/', async (req, res, next) => {
    try {
        if(req.body.grade == ""|| req.body.paymentPrice == "")
            return next({status: 400, message: "Invalid Input",code: "invalid_json"});
        const group = await Group.create({
            grade: req.body.grade,
            paymentPrice: req.body.paymentPrice
        })
        res.status(200).json(group)
    } catch (error) {
        if(error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError' || error.parent.code === '22P02'){
            return next({status: 400, message: error.message,code: "invalid_json"})
        }
        next(error)
    }
})

Router.get('/:id', async (req, res, next) => {
    try {
        const groups = await Group.findByPk(req.params.id,{
            include: [GroupSchedule,Student]
        })
        res.status(200).json(groups)
    } catch (error) {
        next(error)
    }
})

Router.post('/schedule', async (req, res, next) => {
    try {
        if(req.body.groupId == ""|| req.body.day == "" || req.body.time == "")
        return next({status: 400, message: "Invalid Input",code: "invalid_json"});
        const groupSchedule = await GroupSchedule.create({
            groupId: req.body.groupId,
            day: req.body.day,
            time: req.body.time
        })
        res.status(200).json(groupSchedule)
    } catch (error) {
        if(error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError' || error.parent.code === '22P02'){
            return next({status: 400, message: error.message,code: "invalid_json"})
        }
        next(error)
    }
})

module.exports = Router