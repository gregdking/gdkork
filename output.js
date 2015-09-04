var colors = require('colors');

exports.welcome = function () {
    blank();
    console.log('Welcome to gdkork!'.bold);
    console.log('The first k is silent'.blue);
};

exports.goodbye = function () {
    console.log('Good bye!');
};

exports.name = function (target) {
    blank();
    console.log(target.name.bold);
};

exports.description = function (target) {
    console.log(target.description);
    blank();
};

exports.noPath = function () {
    console.log('Sorry, you cannot go that way.');
};

exports.confused = function () {
    console.log('I do not understand what you want to do!');
};

function blank() {
    console.log('');
}