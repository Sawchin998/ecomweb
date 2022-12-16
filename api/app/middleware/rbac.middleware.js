const isAdmin = (req, res, next) => {
    let user = req.auth_user;
    let role = user.role;

    if(role.includes('admin')) {
        next();
    } else {
        next({
            status: 403,
            msg: "You do not have permission."
        })
    }
}

const isSeller = (req, res, next) => {
    let user = req.auth_user;
    let role = user.role;

    if(role.includes('seller')) {
        next();
    } else {
        next({
            status: 403,
            msg: "You do not have permission."
        })
    }
}

const isCustomer = (req, res, next) => {
    let user = req.auth_user;
    let role = user.role;

    if(role.includes('customer')) {
        next();
    } else {
        next({
            status: 403,
            msg: "You do not have permission."
        })
    }
}

const isAdminSeller = (req, res, next) => {
    let user = req.auth_user;
    let role = user.role;

    if(role.includes('admin') || role.includes('seller')) {
        next();
    } else {
        next({
            status: 403,
            msg: "You do not have permission."
        })
    }
}

const isCustomerSeller = (req, res, next) => {
    let user = req.auth_user;
    let role = user.role;

    if(role.includes('customer') || role.includes('seller')) {
        next();
    } else {
        next({
            status: 403,
            msg: "You do not have permission."
        })
    }
}

module.exports = {
    isAdmin,
    isSeller,
    isCustomer,
    isAdminSeller,
    isCustomerSeller
}