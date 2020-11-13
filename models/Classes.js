const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const Classes = new Schema({
    "name": String,
    "description": String,
    "time": [String],
    //day : date 
    "price": Number 
})

module.exports = mongoose.model('Classes', Classes)

