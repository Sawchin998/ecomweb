// std mgmt system 
// let std_name = "Xyz Name";
// let std_email = "xyz@test.com";
// let std_addr = "Kathmandu";
// let std_phone = 1231231231;
// collection store 
// index: value pair 
// elements are seprated by comma 
// indexes are default and begins from 0
            // 0        ,   1           ,   2       ,   3
let std_1 = ["Xyz Name", "xyz@test.com", "Kathmandu", 1231231231];

let std_2 = new Array("Xyz Name", "xyz@test.com", "Kathmandu", 1231231231);
// 10   => 40
// 100 => 400
// 1000 => 4000


console.log(std_1[0]);
console.log(std_1[1]);
console.log(std_1[2]);
console.log(std_1[3]);

// single Dimensional Array
std_1 = ["Xyz Name", "xyz@test.com", "Kathmandu", 1231231231];


// multidimensional array
let all_std = [
    [
        "Xyz Name", "xyz@test.com", "Kathmandu", 1231231231
    ],
    [
        "stdone@test.com", "Std One","Kathmandu", 1231231231
    ],
    [
        "Std Two", "stdTwo@test.com", "Kathmandu", 1231231231
    ],
    [
        "Std Three", ["stdThree@test.com", "secondary@test.com"], "Kathmandu", 1231231231
    ]
];

console.log(all_std[0][0])
console.log(all_std[1][0])      // email
console.log(all_std[2][0])
console.log(all_std[3][0])


// [{},{}, {}]
// print all the values 