const BannerModel = require("../models/banner.model");

class BannerService{

    validateBanner = (data) => {
        let errMsg = {};
        if(!data.name){
            errMsg.name = "Name is required"
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

    createBanner =async (data) => {
        try {
            let banner = new BannerModel(data);
            let ack = await banner.save();
            if(ack){
                return banner
            } else {
                throw {status: 400, msg: "Error creating Banner"}
            }
        } catch(err) {
            throw err
        }
    }

    getAllBanners = async() => {
        return await BannerModel.find();
    }

    getBannerById = async (id) => {
        return await BannerModel.findById(id);
    }

    updateBannerById =  async (data, id) => {
        try{
            return await BannerModel.findByIdAndUpdate(id,{
                $set: data
            })
        } catch(err) {
            throw {status: 400, msg: err};
        }
    }

    deleteBannerById = async (id) => {
        try {
            let ack =  await BannerModel.findByIdAndRemove(id);
            console.log(ack);
            if(ack) {
                return ack;
            } else {
                throw "Banner already deleted."
            }
        } catch(error) {
            throw {status: 500, msg: error}
        }
    }
}

module.exports = BannerService;