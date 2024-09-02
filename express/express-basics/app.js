const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/greet',(req, res, next) => {
    res.send("<h1>Hi, How are you.</h1>");
})


app.use('/add-product', (req, res, next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add</button></form>")
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next) => {
    res.send("<h1>Welcome to express.js app.</h1>");
})


app.listen(3000);