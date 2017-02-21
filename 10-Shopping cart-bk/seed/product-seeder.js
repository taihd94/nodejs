var Product = require('../models/product');
var mongoose = require('mongoose');

var product = [
    new Product({
        imagePath: 'http://statis.infogame.vn/images/upload/2016/07/03/77_wallpaper033-1920x1080.jpg',
        title: 'Diablo III',
        description: 'Awesome game lorem alskdjfal dals kfa e game lorem alskdjfal dals kfa Awesome game lorem alskdjfal dals kfa ef ae falk cka sma Awesome game lorem alskdjfal dals kfa ef ae falk cka sma fm emaeowi awefka wmef amlwke falkwef ae falk cka sma fm emaeowi awefka wmef amlwke falkwme f!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://statis.infogame.vn/images/upload/2016/07/03/77_wallpaper033-1920x1080.jpg',
        title: 'Diablo III',
        description: 'Awesome m alskdjfal dals kfa ef ae falk cka sma fm game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://statis.infogame.vn/images/upload/2016/07/03/77_wallpaper033-1920x1080.jpg',
        title: 'Diablo III',
        description: 'Awesome gasdfame lorem alskdjfal dals kfa ef ae faame lorem alskdjfal dals kfa ef ae falk cka sma lk cka sma fm emaeowi awefka wmef amlwke falkwme f!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://statis.infogame.vn/images/upload/2016/07/03/77_wallpaper033-1920x1080.jpg',
        title: 'Diablo III',
        description: 'Awesome game lorem alskdjfal dals kfa ef ae falk cka sma fm emaeowi awel dals kfa ef ae falk cka sma fm emaeowi awefka wmef amlwke falkwme f!!!fka wmef amlwke falkwme f!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://statis.infogame.vn/images/upload/2016/07/03/77_wallpaper033-1920x1080.jpg',
        title: 'Diablo III',
        description: 'Awesome m alskdjfal dals kfa ef ae falk cka sma fm game!!!',
        price: 10
    })
];

var done = 0;
for(var i = 0; i< product.length; i++) {
    product[i].save(function (err, result) {
        done++;
        if (done === product.length) {
            mongoose.disconnect();
        }
    });
}