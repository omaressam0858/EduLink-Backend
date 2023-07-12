const Router = require('express').Router()

/// Routers Handler

/// Error Handler

Router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    })
})

module.exports = Router