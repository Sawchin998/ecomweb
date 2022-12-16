/**
 * Decision Making Statements
 *  a. if-else
 *  b. else-if
 *  c. switch-cases
 * Interation/Loop 
 *  a. while
 *  b. for 
 *  c. for in 
 *  d. for of
 *  e. map, foreach, filter, reduce
 */

// if-else 
// falsy => null, false, 0, empty variable, undefined, NaN
var a = 0;
if(a) {
    // code block
    a = 20;
}
 else {
    // code block
    a = 10;
}

// product 
let product = {
    price: 1000,
    discount: 5
}
let after_dis = product.price;
if(product.discount > 0){
    after_dis= product.price - product.price * product.discount / 100;
}
console.log(after_dis);
// html 
// Npr. 1000, Npr. 900