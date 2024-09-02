const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const rootDir = require("./util/path");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRouter);
app.use('/shop',shopRouter);

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>');
    // res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
    res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
})

app.listen(3000);