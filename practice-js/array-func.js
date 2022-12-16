let brands = [];    // empty

let brand_1 = "apple";
// array data entry 
// push 
// console.log(brands);
brands.push(brand_1);       // 0

brand_1 = "Samsung";
brands[1] = brand_1;

brand_1 = "Philips";
// pshing at the top of an array
brands.unshift(brand_1);

// lastIndex = size-1

// 3, => 012
let size = brands.length;
brands[size] = "Orange";



// top element
// let first = brands.shift();

// let last = brands.pop();

let index_1 = brands[1];

// delete brands[1];

// brands.splice(1, 1);

//let result = brands.slice(0,2);
// let result = brands.splice(0,2);
// console.log(result);
// console.log(brands);

// loop
// .map, .filter .forEach(), .each .reduce, callback 
brands.map((v, i) => {
    console.log(v);
})


let products = [{
    name: "iPhone 12",
    price: 128000,
    discount: 10,
    stock: 5,
    brand: "apple",
    store: "Evo Store"
}, {

}];
// print
// ProductName: iPhone 12, Price: 128000, Discount: 10, Stock: 5, Brand: apple, Store: Evo Store

// let after_discount = product.price - product.price * product['discount'] / 100;