const mongoose = require("mongoose");

let mongoURI = "";
if(process.env.NODE_ENV==="production"){
  mongoURI = process.env.DB_URL
}else{
  mongoURI = "mongodb://localhost/classes";
}

mongoose.connect(mongoURI, {useNewUrlParser: true}, );

module.exports = mongoose;
