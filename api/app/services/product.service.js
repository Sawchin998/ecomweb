const ProductModel = require("../models/product.model");

class ProductService{

    validateProduct = (data) => {
        let errMsg = {};
        if(!data.title){
            errMsg.title = "Name is required"
        }

        if(!data.price){
            errMsg.price = "Price is required"
        }
        let status = ["active",'inactive','out-of-stock']
       
        if(!data.status){
            errMsg.status = "Status is required";
        } else if(!status.includes(data.status)) {
            errMsg.status = "Status can be either Active, Inactive or out-of-stock";
        }
        

        if(Object.keys(errMsg).length > 0){
            throw {status: 400, msg: errMsg}
        } else {
            return null;
        }
        
    }

    createProduct =async (data) => {
        try {
            let product = new ProductModel(data);
            let ack = await product.save();
            if(ack){
                return product
            } else {
                throw {status: 400, msg: "Error creating Product"}
            }
        } catch(err) {
            throw err
        }
    }

    getAllProducts = async() => {
        return await ProductModel.find()
        .populate("seller")
        .populate("category")
        .populate('brand')
    }

    getProductById = async (id) => {
        return await ProductModel.findById(id);
    }

    updateProductById =  async (data, id) => {
        try{
            return await ProductModel.findByIdAndUpdate(id,{
                $set: data
            })
        } catch(err) {
            throw {status: 400, msg: err};
        }
    }

    deleteProductById = async (id) => {
        try {
            let ack =  await ProductModel.findByIdAndRemove(id);
            console.log(ack);
            if(ack) {
                return ack;
            } else {
                throw "Product already deleted."
            }
        } catch(error) {
            throw {status: 500, msg: error}
        }
    }

    generateUniqueSlug = async (slug) => {
        let exists = await ProductModel.findOne({
            slug: slug
        });
        if(exists) {
            slug = slug+Date.now();
            await this.generateUniqueSlug(slug);
        } else {
            return slug;
        }
    }
}

module.exports = ProductService;