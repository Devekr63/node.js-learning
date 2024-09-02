const express = require('express');
const path = require('path');

const homeRouter = require('./routes/home');
const userRouter = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRouter);

app.use(homeRouter);

app.listen(3000);