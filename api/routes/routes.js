const express = require('express');
const app = express();

const user_routes = require('./user.routes');
const brand_routes = require("./brand.routes");
const banner_routes = require("./banner.routes");
const category_routes = require("./category.routes");
const order_routes = require("./order.routes");
const product_routes = require("./product.routes");
const auth_routes = require('./auth.routes');
// base url: http://localhost:3005/api/v1

// /
app.use(auth_routes);

// /user
app.use('/user', ((req, res, next)=> {
    req.dir = "public/uploads/user"
    next();
}),user_routes);

// brand
app.use("/brand",((req, res, next)=> {
    req.dir = "/public/uploads/brand"
    next();
}),  brand_routes)

// banner
app.use("/banner",((req, res, next)=> {
    req.dir = "/public/uploads/banner"
    next();
}),  banner_routes)

// category
app.use("/category", category_routes)

// order
app.use("/order",((req, res, next)=> {
    req.dir = "/public/uploads/order"
    next();
}),  order_routes)

// product
app.use("/product", product_routes)
module.exports = app;