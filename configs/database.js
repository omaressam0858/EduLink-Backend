const Sequelize = require('sequelize');
const databaseURL = process.env.DATABASE_URL

const sequelize = new Sequelize(databaseURL,{
    logging: false
})


sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))

module.exports = sequelize