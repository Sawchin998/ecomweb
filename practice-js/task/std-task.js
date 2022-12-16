let std= [
    {
        name: "Std One",
        marks_obt: 234,
        total_marks: 500
    },{
        name: "Std Two",
        marks_obt: 340,
        total_marks: 500
    },
    {
        name: "Std Three",
        marks_obt: 430,
        total_marks: 500
    },
];


function getDivision(per) {
    if(per >= 80) {
        return "Distinction";
    } else if(per >= 60){
        return "First Division"
    } else if(per >= 45){
        return "Second Division"
    } else if(per >= 32){
        return "Third Division"
    } else {
        return "Failed"
    }
}

let x =10;
function createHtml(i, std_info) {
    // x 
    html_str += "<tr>";
    html_str += "<td>"+(i+1)+"</td>";
    html_str += "<td>"+std_info.name+"</td>"
    html_str += "<td>"+std_info.marks_obt+"</td>"
    html_str += "<td>"+std_info.total_marks+"</td>"
    html_str += "<td>"+std_info.percentage+"</td>"
    html_str += "<td>"+std_info.division+"</td>"
    html_str += "</tr>";
}

function getPer(value, total){
    return value / total * 100
}

let html_str = "";
for(let i = 0; i<std.length; i++){
    std[i].percentage = getPer(std[i].marks_obt, std[i].total_marks);

    std[i].division = getDivision(std[i].percentage);

    createHtml(i, std[i]);
}




std.map((val, i) =>{
    std[i].percentage = std[i].marks_obt / std[i].total_marks * 100
    std[i].division = getDivision(std[i].percentage);
    createHtml(i, std[i]);

})

document.getElementById('tbody').innerHTML = html_str

// function, method, event, action, slicer, task

