var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.success) {
      res.render('hello', {title: 'Hello page', username: req.session.username});
  } else {
      res.render('index', { title: 'Express'});
  }
});

router.get('/login', function(req, res, next) {
  if(req.session.success) {
      res.render('hello', {title: 'Hello page', username: req.session.username});
  } else {
      res.render('login', { title: 'Login page', success: req.session.success, errors: req.session.errors });
      req.session.errors = null;
  }
});

router.get('/hello', function (req, res, next) {
  if(req.session.success) {
    res.render('hello', {title: 'Hello page', username: req.session.username});
  } else {
    res.redirect('/');
  }
});

router.get('/logout', function (req, res, next) {
  req.session.success = false;
  res.redirect('/');
});

router.post('/submit', function (req, res, next) {
  req.check('email','Invalid email address').isEmail();
  req.check('password','Password is invalid').isLength({min: 3}).equals(req.body.confirmPassword);

  var errors = req.validationErrors();
  if(errors) {
    req.session.errors = errors;
    req.session.success = false;
      res.redirect('/login');
  } else {
    req.session.success = true;
    req.session.username = req.body.username;
      res.redirect('/hello');
  }
});

module.exports = router;
