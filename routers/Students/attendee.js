const Router = require('express').Router()
const {Student, Group,Attendees} = require('../../models/index')
const { Op } = require('sequelize')

Router.get('/absent/:groupId', async (req, res, next) => {
    try {
        const today = new Date().toISOString().split('T')[0];

        const allStudents = await Student.findAll({
            include: [
                {
                    model: Attendees,
                    required: false
                },
                {
                    model: Group,
                    where: {
                        id: req.params.groupId
                    }
                }
            ],
        });
        const notAttendedStudents = await allStudents.filter((student) => {
            const studentAttendees = student.Attendees;
            if (studentAttendees.length === 0) return true;
            const studentAttendeesDates = studentAttendees.map((attendee) => attendee.dayArrived);
            if (!studentAttendeesDates.includes(today)) return true;
        })


        res.status(200).json(notAttendedStudents);
    } catch (error) {
        console.error('Error:', error);
        next(error);
    }
});


Router.get('/:id', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id, {
            include: [Group,Attendees]
        })
        if(!student) return next({status: 404, message: 'Student not found', code: 'not_found'})
        res.status(200).json(student)
    } catch (error) {
        next(error)
    }
})

Router.post('/:id', async (req, res, next) => {
    try{
        const toDay = new Date()
        const student = await Student.findByPk(req.params.id)
        if(!student) return next({status: 404, message: 'Student not found', code: 'not_found'})
        const attendee = await Attendees.create({
            studentId: req.params.id,
            groupId: student.groupId,
            dayArrived: toDay.toISOString().split('T')[0],
            timeArrived: toDay.toISOString().split('T')[1].split('.')[0]
        })
        res.status(200).json(student)
    }catch(error){
        next(error)
    }
})


module.exports = Router