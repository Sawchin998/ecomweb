const uploader = require("../app/middleware/uploader.middleware");
const router = require("express").Router();
const BrandController = require("../app/controllers/brand.controller");
const brand_ctrl = new BrandController();
const loginCheck = require("../app/middleware/auth.middleware");
const { isAdmin } = require("../app/middleware/rbac.middleware");


const setDest = (req, res, next)  =>{
    req.dir = "public/uploads/brand"
    next();
}
router.route('/')
    .get(brand_ctrl.getAllBrands)
    .post(
        loginCheck,
        isAdmin,
        setDest, 
        uploader.single('image'), 
        brand_ctrl.addBrand
    )
router.route('/:id')
    .get(brand_ctrl.getById)
    .put( 
        loginCheck,
        isAdmin,
        setDest, 
        uploader.single('image'), 
        brand_ctrl.updateBrand
    )
    .delete(loginCheck, isAdmin, brand_ctrl.deleteById)
module.exports = router;