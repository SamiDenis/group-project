const express = require("express");
const router = express();
const Classes = require("./models/Classes");
const Instructors = require("./models/Instructors")
const Bookings = require("./models/Bookings");
const body = require("body-parser");
const cors = require("cors");



router.use(body.json());

router.use(cors());

// router.get("/", (req, res) =>{
//     res.redirect("/Classes")
// })

router.get("/Classes", (req, res) =>{
    Classes.find({}).then(data => {
        res.json(data)
    })
})

router.get("/Classes/Instructors", (req, res) =>{
    Instructors.find({}).then(data => {
        res.json(data)
    })
})

router.get("/Classes/Bookings", (req, res) => {
    Bookings.find({}).then(data => {
        res.json(data)
    })
})

router.post("/Classes/Bookings", (req, res) =>{
    Bookings.create(req.body).then((data) => {
        res.json(data)
    })
})

router.get("/Classes/Bookings/:id", (req, res) => {
    Bookings.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(data => {
        res.json(data)
    })
})

router.put("/Classes/Bookings/:id", (req, res) => {
    Bookings.findOneAndUpdate({ _id: req.params.id }, req.body)
    
    .then(data => {
        res.json(data)
}).catch(error => {
    res.json({error : 'could not update'})
})

})
router.delete("/Classes/Bookings/:id", (req, res) => {
    Bookings.findOneAndDelete({ _id: req.params.id }, req.body)
    .then(data => {
        res.json(data)
    })
})

router.set("port", process.env.PORT || 8080);

router.listen(router.get("port"), () => console.log("They see me rollin...on port 8080..."));