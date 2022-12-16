const BrandService = require("../services/brand.service");
const {deleteImage} = require("../helpers/function");
class BrandController {
    constructor() {
        this.brand_svc = new BrandService();
    }
    addBrand = (req, res, next) => {
        try {
            let data = req.body;
            if (req.file) {
                data.image = req.file.filename;
            }
            this.brand_svc.validateBrand(data)
            let ack = this.brand_svc.createBrand(data);
            res.json({
                result: data,
                status: true,
                msg: "Brand Created successfully."
            })
        } catch (error) {
            // if req.file 
            next(error);
        }
    }

    getAllBrands = async (req, res, next) => {
        try {
            let all_brands = await this.brand_svc.getAllBrands();
            res.json({
                result: all_brands,
                status: true,
                msg: "Brand fetched successfully."
            })
        } catch (error) {
            next(error);
        }
    }

    getById = async (req, res, next) => {
        try {
            let brands = await this.brand_svc.getBrandById(req.params.id);
            res.json({
                result: brands,
                status: true,
                msg: "Brand fetched successfully."
            })
        } catch (error) {
            next(error);
        }
    }

    updateBrand = async (req, res, next) => {
        try {
            let data = req.body;
            if (req.file) {
                data.image = req.file.filename;
            }
            this.brand_svc.validateBrand(data)
            let ack = this.brand_svc.updateBrandById(data, req.params.id);
            res.json({
                result: data,
                status: true,
                msg: "Brand Updated successfully."
            })
        } catch (error) {
            // if req.file 
            next(error);
        }
    }

    deleteById = async (req, res, next) => {
        try{
            let ack = await this.brand_svc.deleteBrandById(req.params.id);
            if(ack) {
                deleteImage('brand', ack.image);
            }
            res.json({
                result: ack,
                status: true, 
                msg: "Brand deleted successfully"
            })
        } catch(error) {
            next(error);
        }
    }
}
module.exports = BrandController;