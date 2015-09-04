var util = require('util'),
    Room = require('./room');

function BlueRoom() {
    BlueRoom.super_.call(this);
    this.name = 'Blue Room';
    this.description = "The walls of this room are colored light blue. There is a door to the west."
    this.paths.w = './white-room';
}

util.inherits(BlueRoom, Room);

module.exports = BlueRoom;