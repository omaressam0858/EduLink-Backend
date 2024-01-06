const { DataTypes, Model } = require('sequelize');
const database = require('../configs/database')

const AttendeesModel = require('./Attendees')
const StudentModel = require('./Students')
const GroupModel = require('./Groups')
const GroupScheduleModel = require('./GroupSchedule')
const Attendees = AttendeesModel(database, DataTypes, Model)
const Group = GroupModel(database, DataTypes, Model)
const Student = StudentModel(database, DataTypes, Model)
const GroupSchedule = GroupScheduleModel(database, DataTypes, Model)
// Group.js
Group.hasMany(GroupSchedule, { foreignKey: 'groupId' });
Group.hasMany(Student, { foreignKey: 'groupId' });

// GroupSchedule.js
GroupSchedule.belongsTo(Group, { foreignKey: 'groupId' });

// Student.js
Student.belongsTo(Group, { foreignKey: 'groupId' });
Student.hasMany(Attendees, { foreignKey: 'studentId' });

// Attendees.js
Attendees.belongsTo(Student, { foreignKey: 'studentId' });
Attendees.belongsTo(Group, { foreignKey: 'groupId' });

database.sync({ alter: true })


module.exports = {
    Attendees,
    Student,
    Group,
    GroupSchedule
}