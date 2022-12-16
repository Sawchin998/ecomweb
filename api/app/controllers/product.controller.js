const ProductService = require("../services/product.service");
const {deleteImage} = require("../helpers/function");
const slugify = require("slugify");
const { generateRandomString } = require("../../config/function");

class ProductController {
    constructor() {
        this.product_svc = new ProductService();
    }
    addProduct = async (req, res, next) => {
        try {
            let data = req.body;
            if (req.files) {
                let images = [];
                req.files.map((item) => {
                    images.push(item.filename)
                })
                data.images = images;
            }

            this.product_svc.validateProduct(data)
            
            let slug = slugify(data.title, {replacement: "-", lower: true})
            data.slug = await this.product_svc.generateUniqueSlug(slug);

            
            // data.category = ""
            if(!data.category){
                data.category =  null;
            }
            if(!data.seller){
                data.seller =  null;
            }
            if(!data.brand){
                data.brand =  null;
            }


            // discount[discount_type] = flat, percent
            let discount = {
                discount_type: 'percent',
                discount_value: 0
            }

            if(data.discount_type) {
                discount.discount_type =  data.discount_type,
                delete data.discount_type;
            }

            if(data.discount_value) {
                discount.discount_value =  data.discount_value,
                delete data.discount_value;
            }
            data.discount = discount;

            if(data.discount.discount_type === 'percent') {
                data.after_discount = data.price - data.price * data.discount.discount_value / 100
            } else {
                data.after_discount = data.price - data.discount.discount_value;
            }

            data.product_code = generateRandomString(10);

            let ack = await this.product_svc.createProduct(data);
            
            res.json({
                result: data,
                status: true,
                msg: "Product Created successfully."
            })
        } catch (error) {
            // if req.file 
            next(error);
        }
    }

    getAllProducts = async (req, res, next) => {
        try {
            let all_products = await this.product_svc.getAllProducts();
            res.json({
                result: all_products,
                status: true,
                msg: "Product fetched successfully."
            })
        } catch (error) {
            next(error);
        }
    }

    getById = async (req, res, next) => {
        try {
            let products = await this.product_svc.getProductById(req.params.id);
            res.json({
                result: products,
                status: true,
                msg: "Product fetched successfully."
            })
        } catch (error) {
            next(error);
        }
    }

    updateProduct = async (req, res, next) => {
        try {
            let data = req.body;
            if (req.files) {
                let images = [];
                req.files.map((item) => {
                    images.push(item.filename)
                })
                data.images = images;
            }

            this.product_svc.validateProduct(data)
            
            // data.category = ""
            if(!data.category){
                data.category =  null;
            }
            if(!data.seller){
                data.seller =  null;
            }
            if(!data.brand){
                data.brand =  null;
            }

            // discount[discount_type] = flat, percent
            let discount = {
                discount_type: 'percent',
                discount_value: 0
            }

            if(data.discount_type) {
                discount.discount_type =  data.discount_type,
                delete data.discount_type;
            }

            if(data.discount_value) {
                discount.discount_value =  data.discount_value,
                delete data.discount_value;
            }
            data.discount = discount;

            if(data.discount.discount_type === 'percent') {
                data.after_discount = data.price - data.price * data.discount.discount_value / 100
            } else {
                data.after_discount = data.price - data.discount.discount_value;
            }

            let ack = await this.product_svc.updateProductById(data, req.params.id);
            
            res.json({
                result: data,
                status: true,
                msg: "Product Updated successfully."
            })
        } catch (error) {
            // if req.file 
            next(error);
        }
    }

    deleteById = async (req, res, next) => {
        try{
            let ack = await this.product_svc.deleteProductById(req.params.id);
            if(ack) {
                deleteImage('product', ack.image);
            }
            res.json({
                result: ack,
                status: true, 
                msg: "Product deleted successfully"
            })
        } catch(error) {
            next(error);
        }
    }
}
module.exports = ProductController;


// http://localhost:3000/product/washing-machines-1