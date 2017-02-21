var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/smarthome');

mongoose.connection.once('connected', function () {
    mongoose.connection.db.dropDatabase();
});

var user_model = require('../mongodb/model').user_model;
var floor_model = require('../mongodb/model').floor_model;
var room_model = require('../mongodb/model').room_model;
var sensor_model = require('../mongodb/model').sensor_model;
var switch_model = require('../mongodb/model').switch_model;
var light_model = require('../mongodb/model').light_model;

var room_id_1 = new mongoose.Types.ObjectId();
var room_id_2 = new mongoose.Types.ObjectId();
var light_id_1 = new mongoose.Types.ObjectId();
var switch_id_1 = new mongoose.Types.ObjectId();
var sensor_id_1 = new mongoose.Types.ObjectId();
var sensor_id_2 = new mongoose.Types.ObjectId();

var user =  [
    new user_model({
        username: 'taihd94',
        password: '$2a$05$2m2EHhC/wuNEtAEWQK/BX.gau.IDXyp3P3YuXtytymmJ0IBAgwT.K',
        email: 'taihd94@gmail.com',
        admin: true,
        create_at: new Date('2017-01-22T14:56:59.301Z')
    }),
    new user_model({
        username: 'taihd94@gmail.com',
        password: '$2a$05$zPxNzdSQ96NB4MpilTBsfen8EX/edZSpItPmFyqaznLcGJ8d.UinK',
        email: 'taihoang@gmail.com',
        admin: false,
        create_at: new Date('2017-01-25T07:15:26.301Z')
    })
];

var floor = [
    new floor_model({
        name: '1st floor',
        rooms: [ room_id_1, room_id_2 ]
    })
];

var room = [
    new room_model({
        _id: room_id_1,
        name: 'Bedroom 1',
        items: [
            switch_id_1,
            sensor_id_1,
            sensor_id_2
        ]
    }),
    new room_model({
        _id: room_id_2,
        name: 'Bedroom 2',
        items: [
            switch_id_1,
            sensor_id_1,
            sensor_id_2
        ]
    })
];

var sensor = [
    new sensor_model({
        _id: sensor_id_1,
        type: 'light sensor',
        data: [
            {value: 120, create_at: new Date('2017-01-25T07:15:26.301Z')},
            {value: 150, create_at: new Date('2017-01-25T07:20:26.301Z')},
            {value: 151, create_at: new Date('2017-01-25T07:25:26.301Z')}
        ]
    }),
    new sensor_model({
        _id: sensor_id_2,
        type: 'temperature sensor',
        data: [
            {value: 21, create_at: new Date('2017-01-25T07:15:26.301Z')},
            {value: 22, create_at: new Date('2017-01-25T08:15:26.301Z')},
            {value: 21, create_at: new Date('2017-01-25T09:15:26.301Z')}
        ]
    })
];


var Switch = [
    new switch_model({
        _id: switch_id_1,
        type: 'switch 1',
        lights: [
            light_id_1
        ]
    })
];


var light = [
    new light_model({
        _id: light_id_1,
        type: "compact",
        life_circle: 6000,
        power: 60,
        events: [
            {value: 0, create_at: new Date('2017-01-25T07:15:26.301Z')},
            {value: 1, create_at: new Date('2017-01-25T07:17:26.301Z')},
            {value: 0, create_at: new Date('2017-01-25T07:23:26.301Z')}
        ]
    })
];

var done = 0;
for(var i = 0; i< user.length; i++) {
    user[i].save(function (err, result) {
        done++;
        if (done === user.length) {
            mongoose.disconnect();
        }
    });
}

done = 0;
for(var i = 0; i< floor.length; i++) {
    floor[i].save(function (err, result) {
        done++;
        if (done === floor.length) {
            mongoose.disconnect();
        }
    });
}

done = 0;
for(var i = 0; i< room.length; i++) {
    room[i].save(function (err, result) {
        done++;
        if (done === room.length) {
            mongoose.disconnect();
        }
    });
}

done = 0;
for(var i = 0; i< sensor.length; i++) {
    sensor[i].save(function (err, result) {
        done++;
        if (done === sensor.length) {
            mongoose.disconnect();
        }
    });
}

done = 0;
for(var i = 0; i< Switch.length; i++) {
    Switch[i].save(function (err, result) {
        done++;
        if (done === Switch.length) {
            mongoose.disconnect();
        }
    });
}

done = 0;
for(var i = 0; i< light.length; i++) {
    light[i].save(function (err, result) {
        done++;
        if (done === light.length) {
            mongoose.disconnect();
        }
    });
}


room_model.find({}).poputlate