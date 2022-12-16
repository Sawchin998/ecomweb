const http = require("http");
// http, https
// TCP/IP
// express

// request must respond
const app = http.createServer((req, res) => {
    // home => / => banner, cagtegory, brand, produc
    // listing => /cagtegory/smartphone => product 
    // listing => /brand/apple => product 
    // detail => /product/iphone13 => Detail , related, 
    // catrt => /cart   ===> store cart 
    // payment => /checkout => api 

    let url = req.url;
    let method = req.method;
    // endpoint ===> Route
    if(url === '/' && method === 'GET'){
        res.end(JSON.stringify({
            banner: [],
            product: [],
            user: []
        }))
    } else if(url === '/register' && method === 'POST'){
        // task
        res.end(JSON.stringify({
            banner: [],
            product: [],
            user: []
        }))
    } else {
        res.end(JSON.stringify({
            status: 404,
            msg: "Not found"
        }))
    }

});



// CORS
// https://facebook.com:443/path

// protocol://domain:port/param/param?query=value&query1=value

// 127.0.0.1, ::1, localhost

app.listen(3005, 'localhost', (err) => {
    if(err) {
        console.log("Error listening to port 3005")
    } else {
        console.log("Server is listening to port: 3005");
        console.log("Press CTRL+C to end server");
    }
});

// API Dev                      API 
// Data Database ===>>> Server  <<<======> Client

// url 
    // method, body, param, query, endpoint

    // http://localhost:3005/login, get

// API way  => REST API 
//          => SOAP Api


// get, post, put, patch, delete
// CRUD => Create, Read, Update, Delete