const mongoose = require("monogoose")

const Schema = mongoose.Schema;

const Shop = Schema(
    {   
        price: {
            type: Int32Array,
            require:true, 
            unique: false, 
        },
        nameItem: {
            require: true,
            type: String,
            unqiue: false,
        },
        differentColor:{ }
    }
);

module.exports = mognoose.model("Shop", Shop)

