const BannerService = require("../services/banner.service");
const {deleteImage} = require("../helpers/function");
class BannerController {
    constructor() {
        this.banner_svc = new BannerService();
    }
    addBanner = (req, res, next) => {
        try {
            let data = req.body;
            if (req.file) {
                data.image = req.file.filename;
            }
            this.banner_svc.validateBanner(data)
            let ack = this.banner_svc.createBanner(data);
            res.json({
                result: data,
                status: true,
                msg: "Banner Created successfully."
            })
        } catch (error) {
            // if req.file 
            next(error);
        }
    }

    getAllBanners = async (req, res, next) => {
        try {
            let all_banners = await this.banner_svc.getAllBanners();
            res.json({
                result: all_banners,
                status: true,
                msg: "Banner fetched successfully."
            })
        } catch (error) {
            next(error);
        }
    }

    getById = async (req, res, next) => {
        try {
            let banners = await this.banner_svc.getBannerById(req.params.id);
            res.json({
                result: banners,
                status: true,
                msg: "Banner fetched successfully."
            })
        } catch (error) {
            next(error);
        }
    }

    updateBanner = async (req, res, next) => {
        try {
            let data = req.body;
            if (req.file) {
                data.image = req.file.filename;
            } else {
                delete data.image;
            }

            this.banner_svc.validateBanner(data)
            let ack = this.banner_svc.updateBannerById(data, req.params.id);
            res.json({
                result: data,
                status: true,
                msg: "Banner Updated successfully."
            })
        } catch (error) {
            // if req.file 
            next(error);
        }
    }

    deleteById = async (req, res, next) => {
        try{
            let ack = await this.banner_svc.deleteBannerById(req.params.id);
            if(ack) {
                deleteImage('banner', ack.image);
            }
            res.json({
                result: ack,
                status: true, 
                msg: "Banner deleted successfully"
            })
        } catch(error) {
            next(error);
        }
    }
}
module.exports = BannerController;