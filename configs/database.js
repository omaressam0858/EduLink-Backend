const Sequelize = require('sequelize');
const mysqlconfig = require('./config').mysql
const postgresconfig = require('./config').postgres

const sequelize = new Sequelize(postgresconfig.host,{
    logging: false
})


sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))

module.exports = sequelize