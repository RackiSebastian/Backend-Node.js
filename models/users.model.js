const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("User", User);
