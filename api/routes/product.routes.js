const uploader = require("../app/middleware/uploader.middleware");
const router = require("express").Router();
const ProductController = require("../app/controllers/product.controller");
const product_ctrl = new ProductController();
const loginCheck = require("../app/middleware/auth.middleware");
const { isAdmin } = require("../app/middleware/rbac.middleware");


const setDest = (req, res, next)  =>{
    req.dir = "public/uploads/product"
    next();
}
router.route('/')
    .get(product_ctrl.getAllProducts)
    .post(
        loginCheck,
        isAdmin,
        setDest, 
        uploader.array('image'), 
        product_ctrl.addProduct
    )
router.route('/:id')
    .get(product_ctrl.getById)
    .put( 
        loginCheck,
        isAdmin,
        setDest, 
        uploader.array('image'), 
        product_ctrl.updateProduct
    )
    .delete(loginCheck, isAdmin, product_ctrl.deleteById)
module.exports = router;