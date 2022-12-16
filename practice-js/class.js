class User {
    name;
    email;
    address;

    constructor(name, email, address){
        this.name = name;
        this.email = email;
        this.address = address
    }

    getName = function(){
        return this.name;
    }
}

let usr = new User("Sandesh","sandesh@test.com","Kathmandu");
console.log(usr);


// MVC Pattern 