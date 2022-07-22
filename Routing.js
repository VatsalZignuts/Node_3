import http from 'http';

const server = http.createServer((req,res) => {
    if(req.url == "/"){
        res.end("Hello Home");
    }
    else if(req.url == "/about"){
        res.end("Hello Aboutus");
    }
    else if(req.url == "/contact"){
        res.end("Hello Contectus")
    }
});

server.listen(3620, "127.0.0.1", (err) => {
    console.log("Server is started!!!");
    console.log(err);

});