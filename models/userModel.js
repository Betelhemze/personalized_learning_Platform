const mongoose = require("mongoose");

const userschema = mongoose.Schema({
 Fullname:{
    type: String,
    required: [true, "please add the user name"],
 },
 email:{
    type: String,
    required: [true, "please add your email"],
    unique: [true, "email already in use"],
 },
 password:{
    type: String,
    required: [true, "please add your password"],
 },

},
   {
    timestamp: true,
   },

);


module.exports = mongoose.model("user", userschema);