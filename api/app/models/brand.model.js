const mongoose = require("mongoose");
const { StatusSchema } = require("./common/status.schema");

const BrandSchemaDef = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    status: StatusSchema
}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true
})

const BrandModel = mongoose.model("Brand", BrandSchemaDef)
module.exports  = BrandModel