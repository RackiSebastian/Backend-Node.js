const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Gallery = Schema(
  {
    email: String, 
    username: String, 
    caption: String,
    mainImg: {
      type: String,
      default: "",
    },
    likes:{ 
        type:Number,
        default:0, 
    },
    share: { 
        type:Number,
        default: 0,
    },
    comment: {
        type:Number,
        default:0 ,
    }
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Gallery", Gallery);
