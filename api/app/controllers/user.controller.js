const AuthService = require("../services/auth.service");
const db = require("../services/mongodb.service");
const mongodb = require("mongodb");

class UserController {
    constructor() {
        this.auth_svc = new AuthService();
    }
    userList = async (req, res, next) => {
        try{
            let selDb = await db();
            if(selDb) {
                let users = await selDb.collection('users').find().toArray()
                res.json({
                    result: users,
                    status:true,
                    msg: "Fetched"
                })
            } else {
                throw "Error while db connection"
            }
        } catch(err) {
            next({
                status: 500,
                msg: err
            })
        }
    }

    updateUser = async (req, res, next) => {
        try{
            let data = req.body;
            if(req.file) {
                data.image = req.file.filename;
            }
            let validate = this.auth_svc.registerValidate(data, true);
            if(validate) {
                next({
                    status: 400,
                    msg: validate
                })
            } else {
                let selDb = await db();
                if(selDb) {
                    selDb.collection("users").updateOne({
                        _id: new mongodb.ObjectId(req.params.id)
                    }, {
                        $set: data
                    })
                    .then((respo) => {
                        res.json({
                            result: data,
                            status: true,
                            msg: "User Profile Updated"
                        })
                    })
                    .catch((err) => {
                        next({
                            status: 400,
                            msg: err
                        })
                    })
                } else {
                    throw "Error establashing db connection."
                }
            }
        } catch(err) {
            next({
                status: 500,
                msg: err
            })
        }
    }

    userDelete =  async (req, res, next) => {
        try{
            let selDb = await db();
            if(selDb) {
                let del = await selDb.collection('users').deleteOne({
                    _id: new mongodb.ObjectId(req.params.id)
                })
                res.json({
                    result: null,
                    status:true,
                    msg: "User deleted successfully"
                })
            } else {
                throw "Error while db connection"
            }
        } catch(err) {
            next({
                status: 500,
                msg: err
            })
        }
    }
}

module.exports= UserController;