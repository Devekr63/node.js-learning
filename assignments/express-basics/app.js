const express = require('express');

const app = express();

// app.use('/', (req, res, next) => {
//     console.log("middler ware one.");
//     next();
// })

// app.use('/', (req, res, next) => {
//     console.log("middler ware two.");
// })

app.use('/users', (req, res, next) => {
    res.send("<ul><li>user 1</li><li>user 2</li><li>user 3</li></ul>")
})

app.use('/', (req, res, next) => {
    res.send("<h1>Hello world!</h1>");
})

app.listen(3000);