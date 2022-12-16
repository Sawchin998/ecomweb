const mongoose = require('mongoose');
const { StatusSchema } = require('./common/status.schema');
const AddressSchemaDef = new mongoose.Schema({
    name: String,
    street_name: String,
    house_no: Number
})

const UserSchemaDef = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email:  {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: function(em){
                // text@text.text
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em)
            },
            message: props => `${props.value} is not a valid email.`
        },
        unique: [true, "Email should be unique"]
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    role: [{
        type: String,
        enum: ["admin", 'seller','customer'],
        default: "customer"
    }] ,
    status: {...StatusSchema, default: "active"} ,
    image: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        validate: {
            validator: function(v) {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
          },
    },
    address: {
        billing: AddressSchemaDef,
        shipping: AddressSchemaDef
    }
}, {
    timestamps: true,
    autoIndex: true,
    autoCreate: true
});

// User => users
const UserModel = mongoose.model('User', UserSchemaDef);
module.exports = UserModel;