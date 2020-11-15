const Classes = require("../models/Classes");
const classesData = require("../db/classes.json");
const Instructors = require("../models/Instructors");
const instructorsData = require("../db/instructors.json");
const Bookings = require("../models/Bookings");
const bookingsData = require("../db/bookings.json");


Classes.deleteMany({}).then(() => {
    Classes.create(classesData).then(() =>{
        Classes.find({})
            .then((data) =>
            console.log(data))
        })
        .catch((err) => {
            console.log(err)
        })
    })


Instructors.deleteMany({}).then(() => {
    Instructors.create(instructorsData).then(() =>{
        Instructors.find({})
            .then((data) =>
            console.log(data))
        })
        .catch((err) => {
            console.log(err)
        })
    })

    
Bookings.deleteMany({}).then(() => {
    Bookings.create(bookingsData).then(() => {
        Bookings.find({})
        .then((data) => 
        console.log(data))
    })
    .catch((err) => {
        console.log(err)
    })
})  