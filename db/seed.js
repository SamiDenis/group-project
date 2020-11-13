const Classes = require("../models/Classes");
const classesData = require("../db/classes.json");
const Instructors = require("../models/Instructors");
const instructorsData = require("../db/instructors.json");



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

  