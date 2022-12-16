// Class and Object 
// Entity
    // Student  ===> Class
        // Ram      ===> Object
    // teacher
    // parents
    // class 
    // esxams
    // library
    // attend
    // staff 
    // Accounts/payroll
    // Hr 
    // 
// Prototype Based 
// class based
function User(user) {   // functional Constructor
    // data, 
    // function / methods
    this.name = user.name;
    this.email = user.email;

}

User.prototype.getName = function(){
    return this.name;
}

let user = {
    name: "test",
    email: "tst@test.com"
}

let user_obj = new User(user);
// user_obj.name = "Sandesh";
// user_obj.email = "sandesh@test.com";

console.log(user_obj.getName());


let arry = new Array(1,2,3,4);

arry.push('test');