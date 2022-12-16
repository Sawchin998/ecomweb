const uploader = require("../app/middleware/uploader.middleware");
const router = require("express").Router();
const BannerController = require("../app/controllers/banner.controller");
const banner_ctrl = new BannerController();
const loginCheck = require("../app/middleware/auth.middleware");
const { isAdmin } = require("../app/middleware/rbac.middleware");


const setDest = (req, res, next)  =>{
    req.dir = "public/uploads/banner"
    next();
}
router.route('/')
    .get(banner_ctrl.getAllBanners)
    .post(
        loginCheck,
        isAdmin,
        setDest, 
        uploader.single('image'), 
        banner_ctrl.addBanner
    )
router.route('/:id')
    .get(banner_ctrl.getById)
    .put( 
        loginCheck,
        isAdmin,
        setDest, 
        uploader.single('image'), 
        banner_ctrl.updateBanner
    )
    .delete(loginCheck, isAdmin, banner_ctrl.deleteById)
module.exports = router;