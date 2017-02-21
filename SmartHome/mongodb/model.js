var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username: {type: String, unique: true},
    email: String,
    admin: Boolean,
    create_at: Date,
    update_at: Date
}, {collection: 'users'});

var Stage = new Schema({
    name: String,
    rooms: [{
        roomName: String,
        items: [
            Schema.Types.ObjectId
        ]
    }]
}, {collection: 'house-structure'});

var Sensor = new Schema({
    //itemId: ObjectId,
    type: String,
    data: [{
        value: Number,
        create_at: Date
    }]
}, {collection: 'devices'});

var Switch = new Schema({
    //itemId: ObjectId,
    type: String,
    lights: [
        Schema.Types.ObjectId
    ]
}, {collection: 'devices'});

var Light = new Schema({
    type: String,
    life_circle: Number, //hours
    power: Number,      //watt
    events: [{
        value: String,
        create_at: Date
    }]
}, {collection: 'devices'});

module.exports = {
    user: mongoose.model('users', User),
    stage: mongoose.model('devices', Stage),
    sensor: mongoose.model('sensor', Sensor),
    switch: mongoose.model('switch', Switch),
    light: mongoose.model('light', Light)
};