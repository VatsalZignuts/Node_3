import http from 'http';
import fs from 'fs';

const server = http.createServer((req,res)=>{
    // res.writeHead(200,"OK",{'Content-Type': 'text/html'});
    res.setHeader('Content-type','text/html')
    // res.end('Server is started......');

    if (req.url === '/home'){
        console.log("1111");
        fs.readFile('./home.html', (error,data) => {
            if (error) throw error;
            res.end(data);
        })
        res.end("<h1> HOME </h1>");
    }

    else if (req.url === '/about'){
        console.log("222");
        fs.readFile('./about.html', (error,data) => {
            if (error) throw error;
            res.end(data);
        })
        res.end("<h1> ABOUT </h1>");

    } else{
        console.log("333");
        res.end("<h1> 404 PAGE NOT FOUND </h1>");
    }

});

const PORT = process.env.PORT || 3620;
const HOST = 'localhost';

server.listen(PORT,HOST, ()=>{
    console.log('go to browser....');
});