class User{
    constructor(){
        console.log("I am inside User")
    }
    getUser(a){
        console.log("I am in user Getuser")
    }
}

class Role extends User{
    // constructor overriding
    constructor(){
        super();
        console.log("I am inside Role");
    }

    // method overriding
    getUser(b){
        super.getUser('test');
        // this.getUser();
        console.log("I am in Role Getuser")
    }
}

const role = new Role();
role.getUser();