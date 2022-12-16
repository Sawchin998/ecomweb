const fs = require("fs");

const deleteImage = (path, image) => {
    try{
        let full_path = "public/uploads/"+path;

        if(image) {
            let result = fs.rmSync(full_path+"/"+image)
            return result;
        }
    } catch(err) {
        throw {status: 400, msg: err}
    }
}

module.exports = {
    deleteImage
}