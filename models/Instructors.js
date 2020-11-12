const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const Instructors = new Schema({
    "firstName": String,
    "lastName": String,
    "bio": String,
})

module.exports = mongoose.model('Instructors', Instructors)