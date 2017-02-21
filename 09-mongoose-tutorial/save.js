var mongoose = require('mongoose');
var Story  = require('./model').Story;
var Person = require('./model').Person;
var Person2 = require('./model').Person2;

mongoose.connection.once('connected', function () {
    mongoose.connection.db.dropDatabase();
});

var aaron = new Person({ name: 'Aaron', age: 100 });
var gimmy = new Person2({ name: 'Gimmy', age: 10 });

console.log(aaron._id);

aaron.save(function (err) {
    if (err) throw err;
});

gimmy.save(function (err) {
    if (err) throw err;
});

var story1 = new Story({
    title: "Once upon a timex.",
    creators: [
        {
            kind: 'Person',
            _id: aaron._id
        },
        {
            kind: 'Person2',
            _id: gimmy._id
        }
    ]    // assign the _id from the person
});

story1.save(function (err) {
    if (err) throw err;
    // thats it!
    mongoose.disconnect();
});

