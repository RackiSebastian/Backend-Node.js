const mongoose = require("mongoose")

const Schema = mongoose.Schema; 

const Pictures = Schema(
    {
        email: {
            type:String,
            require: true, 
            unique: true, 
        },
        caption : { 
            type: String, 
            require: false, 
            unique: false, 

        },

        likes: { 
            type: Number,
            default: 0, 
        },
        share:{
            type:Number,
            default:0 , 
        } 
    }
)

module.exports = mongoose.model("Pictures", Pictures);
