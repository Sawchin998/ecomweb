const multer = require('multer');
const fs = require("fs");

const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let path = "public/uploads";        
        if(req.dir){
            path = req.dir;
        }
        if(!fs.existsSync(path)){
            try{
                fs.mkdirSync(path, {
                    recursive: true
                });
            } catch(err) {
                console.log("Err: ", err);
            }
        }
        cb(null, path)
    },
    filename: (req, file, cb )=>{
        let filename = Date.now()+"-"+file.originalname;
        cb(null, filename);
        // name 
    }
})

const imageFilter = (req, file, cb) => {
    let exts = file.originalname.split(".");
    let ext = exts.pop();
    let allowed = ["jpg",'png','gif','bmp','svg','webp', 'jpeg'];
    if(allowed.includes(ext.toLowerCase())) {
        cb(null, true)
        
    } else {
        cb({
            status: 400,
            msg: "Unsupported file format"
        }, null);
    }
}
const uploader = multer({
    storage: myStorage,
    fileFilter: imageFilter
});

module.exports = uploader;