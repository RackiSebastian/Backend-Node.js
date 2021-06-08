const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Profile = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: String, 
    firstName: String,
    secondName: String,
    DOB: String,
    about: String,
    img: {
      type: String,
      default: "",
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Profile", Profile);
