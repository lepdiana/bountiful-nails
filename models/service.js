const mongoose = require('mongoose')
const Schema = mongoose.Schema


const serviceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Service', serviceSchema)