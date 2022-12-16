const UserModel = require('../models/user.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CONFIG = require("../../config/config");

class AuthService {
    loginValidate = (data)=>{
        let msg = null;
        if(!data.email || !data.password){
            msg = "Credentials are required";
        } else {
            msg = null;
        }

        return msg;
    }
    
    registerValidate = (data, is_update= false) => {
        let msg = null;

        if(!data.name){
            msg['name'] = "Name is required"
        } 

        if(!data.email){
            msg['email'] = "Email is required"
        } 

        if(!is_update){
            if(!data.password){
                msg['password'] = "Password is required"
            } 
        }

        if(!data.role){
            msg['role'] = "Role is required"
        } 

        if(msg){
            throw msg
        } else {
            return null;
        }
        // return msg;
    }

    registerUser = (data) => {
        let user = new UserModel(data);
        return user.save();

        // UserModel.insertOne(data)
    }

    login = async (data) => {
        try{

            let user = await UserModel.findOne({
                email: data.email
            });
            if(user) {
                if(bcrypt.compareSync(data.password, user.password)){
                    return user;
                } else {
                    throw { status: 400, msg: "Credentials does not match"}
                }
            } else {
                throw {status: 400, msg: "User does not exists."}
            }
        } catch(err) {
            // err 
            throw err;
        }
        
    }

    getToken = (data) => {
        let token = jwt.sign(data, CONFIG.JWT_SECRET);
        return token;
    }
}

module.exports = AuthService;