const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const Classes = new Schema({
    "name": String,
    "description": String,
    "time": [String],
    "price": [{
            "memberPrice": Number,
            "nonMemberPrice": Number
    }]
})

module.exports = mongoose.model('Classes', Classes)