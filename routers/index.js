const Router = require('express').Router()

const usersRouter = require('./routes/users')
const postsRouter = require('./routes/posts')
const tagsRouter = require('./routes/tags')
/// Routers Handler

Router.use('/users', usersRouter)
Router.use('/posts', postsRouter)
Router.use('/tags', tagsRouter)
/// Error Handler

Router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    })
})

module.exports = Router