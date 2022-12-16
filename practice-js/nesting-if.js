let marks = 120;
let total = 500;

let per = marks / total * 100;

console.log(per);

if(per >= 80) {
    console.log("Distiction");      // 1000
} else {
    if(per >= 60 ) {
        console.log("First Division")
    } else {
        if(per >= 45) {
            console.log("Second Division")
        } else {
            if(per >= 32) {
                console.log("Third Division")
            } else {
                console.log("Sorry! Failed")
            }
        }
    }
}

if(per >= 80) {
    console.log("Distiction");      // 1000
} else if(per >= 60 ) {
    console.log("First Division")
} else if(per >= 45) {
    console.log("Second Divisiion")
} else if(per >= 32) {
    console.log("Third Division")
} else {
    console.log("Sorry! You are failed")
}

let product = [
    {
        name: "",
        price: 1234,
        discount: 0
    },
    {
        name: "",
        price: 1234,
        discount: 10
    },
    {
        name: "",
        price: 1234,
        discount: 10
    }
];
// Code 
product[0].after_discount = product[0].price - product[0].price * product[0].discount / 100;
product[1].after_discount = product[1].price - product[1].price * product[1].discount / 100;
product[2].after_discount = product[2].price - product[2].price * product[2].discount / 100;

// if(product[0].discount > 0) {
//     product[0].after_discount = product[0].price - product[0].price * product[0].discount / 100;
// }else {
//     product[0].after_discount = product[0].price;
// }

// if(product[1].discount > 0) {
//     product[1].after_discount = product[1].price - product[1].price * product[1].discount / 100;
// }else {
//     product[1].after_discount = product[1].price;
// }

// if(product[2].discount > 0) {
//     product[2].after_discount = product[2].price - product[2].price * product[2].discount / 100;
// }else {
//     product[2].after_discount = product[2].price;
// }


console.log(product)

// find the after discount for each product if present 
// assign a new value to the product: after_discount with the calculated value


// per >= 80 => Distinction
// per >= 60 && < 80 => First Divi
// per >= 45 && < 60 => Second Divi
// per >= 32 && < 45 => Third Divi
// per  < 32 => Sorry! Failed