var mongoose = require('m' +
    'ongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/populate');
var Schema = mongoose.Schema;

var personSchema = Schema({
    name    : String,
    age     : Number,
    stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
}, {collection: 'Person'});

var person2Schema = Schema({
    name    : String,
    stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
},{collection: 'Person2'});

var storySchema = Schema({
    creators : [{
        kind: String,
        _id : { type: Schema.Types.ObjectId, refPath: 'creators.kind' }
    }],
    title    : String,
    fans     : [{ type: Number, ref: 'Person' }]
});

module.exports = {
    Story: mongoose.model('Story', storySchema),
    Person: mongoose.model('Person', personSchema),
    Person2: mongoose.model('Person2', person2Schema)
};