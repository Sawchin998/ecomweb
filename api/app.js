const express = require("express");
const app = express();

require('./app/services/mongoose.service');

const routes = require("./routes/routes");
const myEvent = require("./app/events/myevent.events");


require("./config/server.config");

app.use((req, res, next) => {
    req.myEvent = myEvent;
    next();
})


// email send register


app.use(express.static(process.cwd()+"/public"))
app.use("/images", express.static(process.cwd()+"/public/uploads"))


app.use(express.json());    // application/json
app.use(express.urlencoded({extended: false}))
// multipart/form-data


app.set("view engine", "pug")
app.set('views', process.cwd()+"/views");

app.get("/sandesh", (req, res, next) => {
    // db 
    // page 
    res.render("profile", {name: "Sandesh"});
})



// mount
app.use("/api/v1", routes);

app.use((req, res, next) => {
    next({
        status: 404,
        msg: "Not found"
    }); //next middleware
});

// error handling middleware
app.use((error, req, res, next) => {
    console.log(error);
    let status_code = error.status || 500;
    let msg = error.msg || error;

    res.status(status_code).json({
        msg: msg,
        result: null,
        status: false
    })
})
app.listen(3005, 'localhost', (err) => {
    if(err) {
        console.log("Error listening to port.")
    } else {
        console.log("Listening to port: ", 3005);
        console.log("Prss CTRL+C to end server.")
    }
})