var express = require('express');
var router = express.Router();
var deviceData = require('../database/mongodb').deviceData;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/get-data', function (req, res, next) {
    deviceData.find().then(function (doc) {
            res.render('index', {items: doc});
    });
});

router.post('/insert', function (req, res, next) {
  var item = {
      deviceId: req.body.deviceId,
      type: req.body.type,
      events: {
          value: req.body.value,
          time: new Date().toISOString()
      }
  };

  var data = new deviceData(item);
  data.save();
    res.redirect('/get-data');
});

router.post('/update', function (req, res, next) {
    var id = req.body.id;

    deviceData.findById(id, function (err, doc) {
        if(err) {
            console.log('error, no entry found');
        }
        doc.deviceId = req.body.deviceId;
        doc.type = req.body.type;
        doc.events = {
            value: req.body.value,
            time: new Date().toISOString()
        };
        doc.save();
    });

    res.redirect('/get-data');
});

router.post('/delete', function (req, res, next) {
    var id = req.body.id;
    deviceData.findByIdAndRemove(id).exec();
    res.redirect('/get-data');
});
module.exports = router;
