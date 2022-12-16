const mongoose = require("mongoose")
// const ReviewSchemaDef = new mongoose.Schema({
//     user: {
//         type: mongoose.Types.ObjectId,
//         ref: "User",
//         required: true,
//     },
//     review: {
//         type: String
//     },
//     rate: {
//         type: Number,
//         min: 1,
//         max: 5
//     }
// })
const ProductSchemaDef = new mongoose.Schema({
    product_code: {
        type: String,
        required: true, 
        unique: true,
    },
    title: {        
        type: String, 
        required: true,
    },
    slug:  {
        type: String, 
        required: true, 
        unique: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    category: [{
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }],
    discount: {
        discount_type: {
            type: String,
            enum: ["percent", 'flat'],
            default: "percent"
        },
        discount_value: {
            type: Number,
            min: 0
        }
    },
    after_discount: {
        type: Number,
        required: true,
    },
    description: {
        type: String   
    },
    images: [{
        type: String
    }],
    stock: {
        type: Number,
        min: 0
    },
    status: {
        type: String, 
        enum: ['active', "inactive", "out-of-stock"],
        default: "inactive"
    },
    brand: {
        type: mongoose.Types.ObjectId,
        ref: "Brand"
    },
    seller: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    },
    is_featured: {
        type: Boolean,
        default: false
    }
    // reviews: [ReviewSchemaDef]
}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true
});

const ProductModel = mongoose.model("Product", ProductSchemaDef);

module.exports = ProductModel;