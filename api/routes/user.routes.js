const express = require("express");
const router = express.Router();
const loginCheck = require('../app/middleware/auth.middleware');
const UserController = require("../app/controllers/user.controller");
const uploader =  require("../app/middleware/uploader.middleware");
const user_ctrl = new UserController();

const isAdmin = (req, res, next) => {
    next();
}



// User
// /user
// user
router.route("/")
    .get( loginCheck, isAdmin, user_ctrl.userList)
    // /user/3
router.route('/:id')
//     .get(getDetail)
    .put(loginCheck, isAdmin, 
        uploader.single('image'),
        user_ctrl.updateUser)
    .delete(loginCheck, isAdmin, user_ctrl.userDelete)

module.exports = router;