var express = require('express');
var router = express.Router();
var rooms = require('../mongodb/model').room_model;
var lights = require('../mongodb/model').light_model;
var sensors = require('../mongodb/model').sensor_model;

/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
    rooms.find(function (err, docs) {
        var roomsChunk = [];
        var chuckSize = 3;
        for(var i = 0; i < docs.length; i += chuckSize){
            roomsChunk.push(docs.slice(i, i + chuckSize));
        }
        res.render('homepage/index', {title: 'BKHome', rooms: roomsChunk});
    });
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/user/signin');
}

module.exports = router;