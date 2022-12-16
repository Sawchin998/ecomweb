let all_brands = [];
class Brand{
    name;
    constructor(name) {
        this.name = name;
    }
    // setName = (name) => {
    //     this.name = name;
    // }
    showTable = (all_brands) => {
        let html  = "";
        all_brands.map((brand, i) => {
            html += "<tr>";
            html += "<td>"+(i+1)+"</td>";
            html += "<td>"+brand.name+"</td>";
            html += "</tr>";
        })
        return html;
    }
}
const addBrand = () => {
    let name = prompt("Enter the name of Brand: ");
    let brand = new Brand(name);    // 1234
    // brand.setName(name);        // 1234
    all_brands.push(brand);     // [1234, 1234]
    let html_rep = brand.showTable(all_brands);
    document.getElementById('brand_content').innerHTML = html_rep;
}