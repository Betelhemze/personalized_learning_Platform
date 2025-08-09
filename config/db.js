const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("mongoDB connected!");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectionDB;
