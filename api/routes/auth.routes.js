const router = require('express').Router();
const AuthController =  require("../app/controllers/auth.controller")
const auth_ctrl = new AuthController();
const uploader = require('../app/middleware/uploader.middleware');
// label => brand or banner

// user => public/uploads/user
// brand => public/uploads/brand
// banner => public/uploads/banner

router.post('/login', auth_ctrl.login)

router.post('/register',
(req, res, next) => {
    req.dir = "public/uploads/user";
    next();
},
uploader.single('image'),
 auth_ctrl.register)

router.post('/social-login/:id', auth_ctrl.socialLogin)
module.exports = router;