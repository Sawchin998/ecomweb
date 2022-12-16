const CategoryService = require("../services/category.service");
const {deleteImage} = require("../helpers/function");
const slugify = require("slugify");

class CategoryController {
    constructor() {
        this.category_svc = new CategoryService();
    }
    addCategory = async (req, res, next) => {
        try {
            let data = req.body;
            if (req.file) {
                data.image = req.file.filename;
            }
            this.category_svc.validateCategory(data)
            // Smart Phone   >   smart_phone, smart-phone
            data.slug = slugify(data.title, {replacement: "-", lower: true})
            if(!data.child_of) {
                data.child_of = null;
            }
            let ack = await this.category_svc.createCategory(data);
            
            res.json({
                result: data,
                status: true,
                msg: "Category Created successfully."
            })
        } catch (error) {
            // if req.file 
            next(error);
        }
    }

    getAllCategories = async (req, res, next) => {
        try {
            let all_categorys = await this.category_svc.getAllCategories();
            res.json({
                result: all_categorys,
                status: true,
                msg: "Category fetched successfully."
            })
        } catch (error) {
            next(error);
        }
    }

    getById = async (req, res, next) => {
        try {
            let categorys = await this.category_svc.getCategoryById(req.params.id);
            res.json({
                result: categorys,
                status: true,
                msg: "Category fetched successfully."
            })
        } catch (error) {
            next(error);
        }
    }

    updateCategory = async (req, res, next) => {
        try {
            let data = req.body;
            if (req.file) {
                data.image = req.file.filename;
            }
            this.category_svc.validateCategory(data)
            if(!data.child_of) {
                data.child_of = null;
            }
            let ack = this.category_svc.updateCategoryById(data, req.params.id);
            res.json({
                result: data,
                status: true,
                msg: "Category Updated successfully."
            })
        } catch (error) {
            // if req.file 
            next(error);
        }
    }

    deleteById = async (req, res, next) => {
        try{
            let ack = await this.category_svc.deleteCategoryById(req.params.id);
            if(ack) {
                deleteImage('category', ack.image);
            }
            res.json({
                result: ack,
                status: true, 
                msg: "Category deleted successfully"
            })
        } catch(error) {
            next(error);
        }
    }
}
module.exports = CategoryController;


// http://localhost:3000/category/washing-machines-1