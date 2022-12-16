let product = {
    "first":{
        name: "Product 1",
        price: 1230,
        discount: 0,
        brand: "Apple",
        category: "mobile"
    },
    "second":{
        name: "Product 2",
        price: 2345,
        discount: 5,
        brand: "brand",
        category: "mobile"
    },
    "third":{
        name: "Product 3",
        price: 1000,
        discount: 0,
        brand: "brand",
        category: "mobile"
    }
}
let html_str = "";
// product.map((val, index) => {
//     // val => obje
//     html_str += "<tr>";
//     html_str += "<td>"+(index+1)+"</td>";
//     html_str += "<td>"+val.name+"</td>";
//     html_str += "<td>"+val.category+"</td>";
//     html_str += "<td>"+val.brand+"</td>";
//     html_str += "<td>NPR. "+val.price+"</td>";
//     html_str += "<td>"+val.discount+"%</td>";
//     val.after_discount = val.price - val.price * val.discount /  100;
//     html_str += "<td>NPR. "+val.after_discount+"</td>";
//     html_str += "</tr>";
// });

// product.forEach((val, index) => {
//     // val => obje
//     html_str += "<tr>";
//     html_str += "<td>"+(index+1)+"</td>";
//     html_str += "<td>"+val.name+"</td>";
//     html_str += "<td>"+val.category+"</td>";
//     html_str += "<td>"+val.brand+"</td>";
//     html_str += "<td>NPR. "+val.price+"</td>";
//     html_str += "<td>"+val.discount+"%</td>";
//     val.after_discount = val.price - val.price * val.discount /  100;
//     html_str += "<td>NPR. "+val.after_discount+"</td>";
//     html_str += "</tr>";
// });

// let all_without_discount = product.filter((val, ind) => val.discount <= 0)
Object.values(product).map((val, index) => {
    // let val = product[key];
    html_str += "<tr>";
    html_str += "<td>"+(index+1)+"</td>";
    html_str += "<td>"+val.name+"</td>";
    html_str += "<td>"+val.category+"</td>";
    html_str += "<td>"+val.brand+"</td>";
    html_str += "<td>NPR. "+val.price+"</td>";
    html_str += "<td>"+val.discount+"%</td>";
    val.after_discount = val.price - val.price * val.discount /  100;
    html_str += "<td>NPR. "+val.after_discount+"</td>";
    html_str += "</tr>";
})
// console.log(all_without_discount);
document.getElementById('tbody').innerHTML = html_str;
