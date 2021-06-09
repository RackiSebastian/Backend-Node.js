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
    minlength: 6
  },
});

// fire a func before doc saved to db
Schema.pre('save', function (next) {

  next();
});

module.exports = mongoose.model("User", User);
