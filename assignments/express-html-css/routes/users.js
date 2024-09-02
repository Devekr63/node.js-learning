const express = require('express');
const path = require('path');

const router = express.Router();

router.post('/add-users', (req, res, nest) => {
    
});

router.get('/add-users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-user-form.html'))  
})

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
})

module.exports = router;