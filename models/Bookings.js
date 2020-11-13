const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const Bookings = new Schema({
    "class-name":String, 
    "attendee":String, 
    "instructor": String, 
    "day": String, 
    "time": String 
   
})

module.exports = mongoose.model('Bookings', Bookings)

