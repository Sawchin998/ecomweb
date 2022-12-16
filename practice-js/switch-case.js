let act = "add";            // add, view, update, delete

if(act === 'add') {
    // Create insert
} else if(act === "edit") {
    // update operatioon
} else if(act === "view") {
    // read operation
} else if(act === 'delete') {
    // delete Operation
} else {
    // unknown operation
}



let day = "Saturday";       // Sunday
// holiday
// weekday

switch(day) {
    case "Saturday":
    case "Sunday":
        console.log("Holiday")
        break;
    default: 
        console.log("Weekday")
        break;
}

if(day === "Saturday" || day=== "Sunday"){
    console.log("Holiday");
} else {
    console.log("Weekday")
}


// payroll 
// Tax slab 
// 4 > 1%
// 5 10 
// upto 5,00,000 => 1%
// from 5,00,000 - 7,00,000 => 10%
// from 7,00,000 - 10,00,000 => 20%
// 10,00,000 - 20,00,000    => 30
// > 20,00,000 => 36%

let annual_income = 10000000;
let total_tax = 0;
let res = 0;
if(annual_income >=500000){
    total_tax = 500000 * 0.01;
    res = annual_income - 500000;
    if(res >= 200000){
        total_tax += (200000* 0.1);
        res = res - 200000;
        if(res >= 300000){
            total_tax += (300000 * 0.2);
            res = res - 300000;
            if(res >= 1000000){
                total_tax += (1000000 * 0.3);
                res = res - 1000000;
                if(res > 0){
                    total_tax += res * 0.36;
                }
            } else {
                total_tax += res * 0.3;
             }
        } else {
            total_tax= res * 0.2;
        }
    } else {
        total_tax = res * 0.1;
    }
} else {
    total_tax = annual_income * 0.01
}
console.log("Monthly Income: ", annual_income/12)
console.log("Annual: ",total_tax)
console.log("Monthly: ", total_tax/12)

// 5000
// 2000
// 6000
// 30000
// 
// how much tax I need to pay annually