var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hello', condition: true });
});

router.get('/login', function(req, res, next) {
  res.render('login', {title: 'login page'});
});

router.get('/login/user1', function(req, res, next) {
  res.send('hello user 1');
});

module.exports = router;
