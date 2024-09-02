const expres = require('express');
const path = require('path');

const router = expres.Router();

router.get('/add-product', (req, res, next) => {
    // res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add</button></form>");
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
});

module.exports = router; 