const Sequelize = require('sequelize');
const database = require('../configs/database')

database.sync({ force: false })


module.exports = {

}