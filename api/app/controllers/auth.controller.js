const AuthService = require("../services/auth.service");
const db = require("../services/mongodb.service");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

class AuthController {
    constructor() {
        this.auth_svc = new AuthService();
    }

    

    login = async (req, res, next) => {
        // 
        try{
            let data = req.body;
            let validate = this.auth_svc.loginValidate(data);

            if(validate){
                next({
                    status: 400,
                    msg: validate
                })
            } else {
                let user = await this.auth_svc.login(data);
                let token = this.auth_svc.getToken({
                    id: user._id,
                    name: user.name
                });
                res.json({
                    result: {
                        user: user,
                        access_token: token
                    },
                    status: true,
                    msg: "User logged in successfully."
                })
            }
        } catch(err) {
            // req.file image => delete
            next(err)
        }
        
    }

    register = async (req, res, next) => {
        try{
            let data = req.body;
            
            if(req.file) {
                data.image = req.file.filename;
            }
            this.auth_svc.registerValidate(data);
            
            data.password = bcrypt.hashSync(data.password, 10);

            this.auth_svc.registerUser(data)
            .then((succ) => {
                res.json({
                    status: true,
                    msg: "User registered",
                    result: data
                })
            }).catch((err) => {
                next({ status: 400, msg: err})
            })
            
        } catch(error){
            next({
                status: 422,
                msg: error
            })
        }
    }

    socialLogin = async(req, res, next) => {
        // user_id: db id
        // user_id 
        // facebook_id: 
        // type fb

        let type = {

        }
        if(req.body.type === "fb"){
            type = {
                facebook: req.body.id 
            }
        } else if(req.body.type === 'google'){
            type = {
                google: req.body.id 
            }
        }

        db()
        .then((seldb) => {
            seldb.collection('users').updateOne({
                _id: new mongoose.ObjectId(req.params.id)
            }, {
                $set: {
                    social: type
                }
            })
        })
    }

    getUserBySocial = async (req, res, next) => {
        // type, id 
        let type = {}
        if(req.body.type === "fb"){
            type = {
                facebook: req.body.id 
            }
        } else if(req.body.type === 'google'){
            type = {
                google: req.body.id 
            }
        }
        // selDB.collection('users').findOne({
            // social: type
        //}).then((user) => res.json({result: user, status: true, msg: "User Profile"}))
    }
}

module.exports = AuthController;