const express = require('express')
const app = express();
const port = 3620

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/home', (req, res) => {
    res.send('Welcome to home page');
});

app.get('/about', (req, res) => {
    res.send('Welcome to about page');
});

app.get('/contact', (req, res) => {
    res.send('Welcome to contact page');
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}!`);
});