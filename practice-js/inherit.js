class User{
    name;
    email;
    password;
    getName = () => {

    }
}

class Role extends User{
    role;
    permission;
}

class Seller extends Role{
    address;
}

const sel_obj = new Seller();

sel_obj.name = "Seller User";
sel_obj.email = "seller@test.com";
sel_obj.password = "seller123";
sel_obj.role = "seller";
sel_obj.permission = {
    can_write: true
}
sel_obj.address = "Kathmandu"

console.log(sel_obj);