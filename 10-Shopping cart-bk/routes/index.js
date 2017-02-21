var express = require('express');
var router = express.Router();
var Products = require('../models/product');
var csrf = require('csurf');

var crsfProtection = csrf();
router.use(crsfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
    Products.find(function (err, docs) {
        var productChunks = [];
        var chuckSize = 3;
        for(var i = 0; i < docs.length; i += chuckSize){
            productChunks.push(docs.slice(i, i + chuckSize));
        }
        console.log(productChunks);
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks});
    });
});

router.get('/user/signup', function (req, res, next) {
    res.render('user/signup', {csrfToken: req.csrfToken()});
});

router.post('/user/signup', function (req, res, next) {
   res.redirect('/');
});

module.exports = router;
