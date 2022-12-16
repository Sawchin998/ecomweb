const mongoose = require("mongoose");
const CONFIG = require("../../config/config");

mongoose.connect(CONFIG.DB_URL+"/"+CONFIG.DB_NAME,{
    autoIndex: true,
    autoCreate: true
}, (err) => {
    if(err) {
        console.log("Error: ", err);
    } else {
        console.log("Mongodb connected successfully.");
    }
});