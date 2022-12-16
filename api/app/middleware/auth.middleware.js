const jwt = require("jsonwebtoken");
const CONFIG = require("../../config/config");
const UserModel = require("../models/user.model");

const loginCheck = async (req, res, next) => {
    let token = null;
    if (req.headers['authorization']) {
        token = req.headers['authorization'];
    }

    if (req.headers['x-xsrf-token']) {
        token = req.headers['x-xsrf-token'];
    }

    if (req.query['token']) {
        token = req.query['token'];
    }

    if (!token) {
        next({
            status: 401,
            msg: "Unauthenticated"
        })
    } else {
        try {
            // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDYxNmM0ZTA5ZGJlYThiZmM2YTgxMSIsIm5hbWUiOiJTYW5kZXNoIEJoYXR0YXJhaSIsImlhdCI6MTY1ODE5ODE0OX0.-cglZaEgeEO12oyyVsqdGfHP2DDHpQqJtXDh7qO7Wg8
            let token_parts = token.split(" ");
            // token = token_parts[token_parts.length - 1]
            token = token_parts.pop();

            // verify 
            let data = jwt.verify(token, CONFIG.JWT_SECRET)
            
            if (data) {
                // 
                let user = await UserModel.findById(data.id);
                if (user) {
                    req.auth_user = user;
                    next();
                } else {
                    next({
                        status: 401,
                        msg: "Token expired or user does not exists."
                    })
                }
            } else {
                next({
                    status: 401,
                    msg: "Unauthorized: Token mismatched"
                })
            }
        } catch (err) {
            next({
                status: 400,
                msg: err
            })
        }
    }
}

module.exports = loginCheck;