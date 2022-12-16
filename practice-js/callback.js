const dashboard = (err, success) => {
    if(err) {
        console.log("Unauthorized")
    } else {
        console.log("I am Dashboard");
    }
}

const login = (user, pass, cb) => {
    // console.log("I am inside doNothing");
    // login 
    let lg = true;
    cb(true, false);
    cb(false, true);
    // if(lg){
    //     cb(null, {});
    // } else {
    //     cb(true);
    // }
}


let uname = ""
let pass = "";
login(uname, pass, dashboard)





// slug => unique 

let getSlug = (str, counter = 0) => {       // test-10, 11
    let slug = "test-"+counter;         // test-11
    if(counter <= 10) {     
        // counter++                    // 11<=10
        return getSlug(slug, ++counter)        // test-10, 11
    }
        return slug;                        // test-11
    
}

let slugVal = getSlug("test");

console.log(slugVal)




let user = [
    {
        name: "Sandesh"
    }
];

let userLoop = (val, i) => {

}

user.map(userLoop);

// async 
setTimeout(() => {
    console.log("I am delayed output");
},1000);

// dat4e 
let date = new Date();  // system current date 
let year = date.getFullYear();  // 2022
let month = date.getMonth() + 1;        // 0-11
let day = date.getDate();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

doSomething(doNothing);