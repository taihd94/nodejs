var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/test');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: {type: String, required: true},
    password: {type: String, required: true},
    admin: Boolean,
    meta: {
        age: Number,
        website: String
    },
    create_at: Date,
    updated_at: Date
});

userSchema.methods.dudify = function() {
    // add some stuff to the users name
    this.name = this.name + '-dude';
    return this.name;
};

var User = mongoose.model('User', userSchema);

module.exports = User;