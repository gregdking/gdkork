var util = require('util'),
    Room = require('./room');

function WhiteRoom() {
    WhiteRoom.super_.call(this);
    this.name = 'White Room';
    this.description = "This room is painted white, what does it mean? An open door leads to the east."
    this.paths.e = './blue-room';
}

util.inherits(WhiteRoom, Room);

module.exports = WhiteRoom;