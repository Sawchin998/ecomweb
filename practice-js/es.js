// ES 5 
// ES 6
// import and export 
// import ES5
// const xyz = require("./a");

// all import
// const xyz = require("./a");

// xyz.functionA()
// xyz.functionB()

// destruct
// const {functionA, functionB} = reuqire("./a");

// functionA();

// ES6
// default import 
// import * as abc from "./b";
// abc.functionA();

// named import 
// import {TestClass, functionA} from "./b"
// functionA();

// Spread and Rest Operator 
let user = {
    name: "",
    email: "",
    address: ''
}

let user_1 = {
    ...user,
    phone: "",
    role: ""
}

// let full_name = user_1.name;
// let email = user_1.email;

// object destructuring
// nam
let {email,name:full_name, ...left} = user_1;

// Template literals
// Dear ....., Your account has been registered, 
// Please click the link below to activate your account: 
// .........
let template = `Dear ${full_name}, Your account has been registered, `;

// arrow notation 
let abc = (x=null) => x
