const mongoose = require("mongoose");
const {StatusSchema} = require("./common/status.schema");
const CategorySchemaDef = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true, 
        unique: true
    },
    child_of: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        default: null
    },
    image: {
        type: String
    },
    brands: [{
        type: mongoose.Types.ObjectId,
        ref: "Brand"
    }],
    status: StatusSchema,
    show_in_home: {
        type: Boolean,
        default: false
    }
}, {
    autoCreate: true, 
    timestamps: true,
    autoIndex: true
});

const CategoryModel = mongoose.model("Category", CategorySchemaDef);
module.exports = CategoryModel

// 1 Smartphones => child_of -> null, 
// 2 Android     => child_of -> 1