const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const Bookings = new Schema({
    // "name":String, 
    // "instructor": String, 
    "date": String, 
    // "time": [String], 
    "if-booked": Boolean
   
})

module.exports = mongoose.model('Bookings', Bookings)

