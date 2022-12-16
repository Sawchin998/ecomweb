/**
 * a. Arithematic Operators
 *          +, -, *, /, %
 * b. Increment Decrement
 *      ++, --
 *  c. Assignment Operator 
 *      =, +=, -=, /=, %=
 *  d. Comparision Operator 
 *      <, >, <=, >=, ==, !=, ===, !==
 * e. String/Concatination operator 
 *          +, ,
 * f. Logical Operator 
 *          &&, ||, !
 * g. Conditional Or Ternary 
 *      (exp) ? true : false
 * h. Spread Operator 
 *      ...
 */     
let a = 10;
let b = 2;

let c = a / b;  // 5
let d = a % b;   // 0

// a = 10

a = a + 1;                      // a = 11
console.log(a++);               // a = 11, post assign
// console.log(a);                 // a = 12
console.log(++a);               // a = 13, pre assign

a += 1;

a = a + 5;
a += 5;

(a < b)     // true
            // false 

let x = 10;
let y = '10';

(x == y);       // true
(x === y);      // false

(x != y);       // false
(x !== y);      // true

let first = "First";
let last = "Name";

// First Name 
first = first + " " + last;

let name = "sandesh";

let email = "Dear "+name+", Thank you for your registration. ";
email += "Click the link below in order to activate your account: ";


first += " "+last;

(a == b) && (x <= y)  // => false
(a == b) || (x <= y)  // => true
!(true)                 // => false
!(false)                 // => true
// false  &&  true

let status = null;

status = status ? 'active' : "inactive";

// status = status ? status : "inactive";
let status_a = status ?? 'inactive';


let user = {
    name: "",
    email: "",
    address: ""
}

let stds = {
   ...user,
    role: '',
    phone: ''
}