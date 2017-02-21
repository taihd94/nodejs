var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Story  = require('./model').Story;
var Person = require('./model').Person;
var Person2 = require('./model').Person2;

Story
    .findOne({})
    .populate('creators._id')
    .exec(function (err, docs) {
        if (err) throw err;
        console.log(docs);
    });
