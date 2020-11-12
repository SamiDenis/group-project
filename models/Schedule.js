const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const Schedule = new Schema({
    "name":String,
    "decription":String,
    "instructor": String,
    "day": String,
    "time": String
})

module.exports = mongoose.model('Schedule', Schedule)