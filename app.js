const express = require('express')
require('dotenv').config()
const cors = require('cors')
const Router = require('./routers/index')

const app = express()
const PORT = process.env.PORT || 3000

// Body Parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORS
app.use(cors())


app.use('/api', Router)


// 404 Handler-
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found'
    })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))