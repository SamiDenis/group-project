const mongoose = require("../db/connection");

const Schema = mongoose.Schema;

const Bookings = new Schema({
  "date": String,
  "if-booked": Boolean,
});

module.exports = mongoose.model("Bookings", Bookings);
