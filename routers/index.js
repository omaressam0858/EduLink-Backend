const Router = require('express').Router()

/// Routers Handler


/// Groups
const GroupsRouter = require('./Groups/index')
const StudentsRouter = require('./Students/index')

Router.use('/students', StudentsRouter)
Router.use('/groups', GroupsRouter)
/// Error Handler

Router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        code: err.code || 'internal_server_error'
    })
})

module.exports = Router