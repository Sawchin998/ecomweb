const uploader = require("../app/middleware/uploader.middleware");
const router = require("express").Router();
const CategoryController = require("../app/controllers/category.controller");
const category_ctrl = new CategoryController();
const loginCheck = require("../app/middleware/auth.middleware");
const { isAdmin } = require("../app/middleware/rbac.middleware");


const setDest = (req, res, next)  =>{
    req.dir = "public/uploads/category"
    next();
}
router.route('/')
    .get(category_ctrl.getAllCategories)
    .post(
        loginCheck,
        isAdmin,
        setDest, 
        uploader.single('image'), 
        category_ctrl.addCategory
    )
router.route('/:id')
    .get(category_ctrl.getById)
    .put( 
        loginCheck,
        isAdmin,
        setDest, 
        uploader.single('image'), 
        category_ctrl.updateCategory
    )
    .delete(loginCheck, isAdmin, category_ctrl.deleteById)
module.exports = router;