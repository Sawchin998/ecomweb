const fs = require("fs");
// http, path, events
let file_name = "files/user.json";

let user = [{
    name: "Sandesh Bhattarai",
    email: "sandeh@broadwayinfosys.com",
    role: "Teacher"
},{
    name: "Student one Bhattarai",
    email: "studentone@broadwayinfosys.com",
    role: "Student"
}]

fs.open(file_name, "w", (err, fp) => {
    if(err){
        console.log("Error opening file, "+ err);
    } else {
        let user_string = JSON.stringify(user);

        fs.writeFile(fp, user_string, (error) => {
            if(error) {
                console.log("File write error")
            } else {
                console.log("File written successfully.")
            }
        })
    }
});


fs.open(file_name, "r", (err, fp) => {
    if(err){
        console.log("Error opening file, "+ err);
    } else {

        fs.readFile(fp, {
            encoding: "utf8"
        }, (error, data) =>{
            if(error) {
                console.log("Error reading file");
            } else {
                console.log(data);
            }
        })
        
    }
})