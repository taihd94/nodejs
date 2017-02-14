var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', condition: false, anyArray: [1, 2, 3] });
});

router.get('/test/:id', function (req, res, next) {
  res.render('test', { data: req.params.id});
});

router.post('/test/submit', function (req, res, next) {
  res.render('yourname', { fname: req.body.fname, lname: req.body.lname});
});

module.exports = router;
