var User = require('./users.js');

var DucTai = new User({
    name: 'Duc Tai',
    username: 'taihd12' + Math.random(),
    password: 123123123
});

DucTai.dudify(function (err, name) {
    if (err) throw err;
    console.log('Your new name is: ' + name);
});

DucTai.save(function (err) {
    if(err) throw err;
    console.log('User saved successfully');
});