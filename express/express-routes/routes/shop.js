const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req, res, next) => {
    // res.send("<h1>Welcome to express.js app.</h1>"); 
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); //send a html page
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})


module.exports = router;