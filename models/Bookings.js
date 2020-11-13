const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const Bookings = new Schema({
    "name":String, //class name
    "decription":String, //drop, don't need, put attendee here
    "instructor": String, 
    "day": String, 
    "time": String 
   
})

module.exports = mongoose.model('Bookings', Bookings)

