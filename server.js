const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/bountifulNailsdb', 
    {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('Connected to the DB')
    }
)

app.use('/api/services', require('./routes/serviceRouter.js'))

app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})