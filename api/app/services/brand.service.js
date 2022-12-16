const BrandModel = require("../models/brand.model");

class BrandService{

    validateBrand = (data) => {
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

    createBrand =async (data) => {
        try {
            let brand = new BrandModel(data);
            let ack = await brand.save();
            if(ack){
                return brand
            } else {
                throw {status: 400, msg: "Error creating Brand"}
            }
        } catch(err) {
            throw err
        }
    }

    getAllBrands = async() => {
        return await BrandModel.find();
    }

    getBrandById = async (id) => {
        return await BrandModel.findById(id);
    }

    updateBrandById =  async (data, id) => {
        try{
            return await BrandModel.findByIdAndUpdate(id,{
                $set: data
            })
        } catch(err) {
            throw {status: 400, msg: err};
        }
    }

    deleteBrandById = async (id) => {
        try {
            let ack =  await BrandModel.findByIdAndRemove(id);
            console.log(ack);
            if(ack) {
                return ack;
            } else {
                throw "Brand already deleted."
            }
        } catch(error) {
            throw {status: 500, msg: error}
        }
    }
}

module.exports = BrandService;