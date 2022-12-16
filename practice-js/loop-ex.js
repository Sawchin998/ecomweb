let product = [
    {
        name: "Product 1",
        price: 1230,
        discount: 10,
        brand: "Apple",
        category: "mobile"
    },
    {
        name: "Product 2",
        price: 2345,
        discount: 5,
        brand: "brand",
        category: "mobile"
    }
]
let size = product.length;
// last = size-1
let html_str = "";

for(let i =0; i<size; i++){
    if(i >2 && i < 5){
        html_str += "<tr>";
        html_str += "<td>"+(i+1)+"</td>";
        html_str += "<td>"+product[i].name+"</td>";
        html_str += "<td>"+product[i].category+"</td>";
        html_str += "<td>"+product[i].brand+"</td>";
        html_str += "<td>NPR. "+product[i].price+"</td>";
        html_str += "<td>"+product[i].discount+"%</td>";
        product[i].after_discount = product[i].price - product[i].price * product[i].discount /  100;
        html_str += "<td>NPR. "+product[i].after_discount+"</td>";
        html_str += "</tr>";
    }
}

document.getElementById('tbody').innerHTML = html_str;
