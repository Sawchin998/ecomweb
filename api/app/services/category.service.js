const CategoryModel = require("../models/category.model");

class CategoryService{

    validateCategory = (data) => {
        let errMsg = {};
        if(!data.title){
            errMsg.title = "Name is required"
        }
        if(!data.status){
            errMsg.status = "Status is required";
        } else if(data.status !== 'active' && data.status !== 'inactive') {
            errMsg.status = "Status can be either Active or Inactive";
        }

        if(Object.keys(errMsg).length > 0){
            throw {status: 400, msg: errMsg}
        } else {
            return null;
        }
        
    }

    createCategory =async (data) => {
        try {
            let category = new CategoryModel(data);
            let ack = await category.save();
            if(ack){
                return category
            } else {
                throw {status: 400, msg: "Error creating Category"}
            }
        } catch(err) {
            throw err
        }
    }

    getAllCategories = async() => {
        return await CategoryModel.find().populate("brands")
        .populate("child_of")
    }

    getCategoryById = async (id) => {
        return await CategoryModel.findById(id);
    }

    updateCategoryById =  async (data, id) => {
        try{
            return await CategoryModel.findByIdAndUpdate(id,{
                $set: data
            })
        } catch(err) {
            throw {status: 400, msg: err};
        }
    }

    deleteCategoryById = async (id) => {
        try {
            let ack =  await CategoryModel.findByIdAndRemove(id);
            console.log(ack);
            if(ack) {
                return ack;
            } else {
                throw "Category already deleted."
            }
        } catch(error) {
            throw {status: 500, msg: error}
        }
    }
}

module.exports = CategoryService;