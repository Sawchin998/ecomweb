const mongoose = require("mongoose");
const BannerSchemaDef = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    },
    link: {
        type: String,
        default: null
    },
    image: {
        type: String
    },
    status: {
        type: String,
        enum:["active",'inactive'],
        default: "inactive"
    }
}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true
})

const BannerModel = mongoose.model("Banner", BannerSchemaDef)
module.exports  = BannerModel