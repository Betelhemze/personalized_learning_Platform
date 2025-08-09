const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },

  {
    timestamps: true,
  }
);

//"admin" is the name of the model and will saved as a collection in the mongodb
//adminschema is the struct of ypur mongoDB
//.model it regisetrs the model woth mongoose so you can use it for fud operation
module.exports = mongoose.model("admin", adminSchema);
