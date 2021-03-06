var mosca = require('mosca');
var debug = require('debug')('smarthome:mqtt/broker');

var pubsubsettings = {
    type: 'mongo',
    url: 'mongodb://localhost:27017/mqtt',
    pubsubCollection: 'mqtt',
    mongo: {}
};

var settings = {
    port: 1883,
    backend: pubsubsettings
};

//here we start mosca
var server = new mosca.Server(settings);
server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
    console.log('Mosca server is up and running');
}

// fired whena  client is connected
server.on('clientConnected', function(client) {
    debug('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
    debug('Published : ', packet.payload);
});

// fired when a client subscribes to a topic
server.on('subscribed', function(topic, client) {
    debug('subscribed : ', topic);
});

// fired when a client subscribes to a topic
server.on('unsubscribed', function(topic, client) {
    debug('unsubscribed : ', topic);
});

// fired when a client is disconnecting
server.on('clientDisconnecting', function(client) {
    debug('clientDisconnecting : ', client.id);
});

// fired when a client is disconnected
server.on('clientDisconnected', function(client) {
    debug('clientDisconnected : ', client.id);
});

module.exports = server;