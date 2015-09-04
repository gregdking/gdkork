var output = require('./output');

var rooms = {};

function Room() {
    this.name = '';
    this.description = '';
    this.visited = false;
    this.paths = {};
}

Room.getRoom = function (id) {
    var ctor;
    if (!rooms[id]) {
        ctor = require(id);
        rooms[id] = new ctor();
    }
    return rooms[id];
};

Room.prototype.visit = function () {
    output.name(this);
    if (!this.visited) {
        output.description(this);
        this.visited = true;
    }
};

Room.prototype.interact = function (command) {
    switch (command) {
        case 'l':
            look(this);
            break;
        case 'n':
        case 's':
        case 'e':
        case 'w':
            return move(this, command);
        default:
            confused();
            break;
    }
    return this;
};

function look(self) {
    self.visited = false;
}

function move(self, direction) {
    var roomId = self.paths[direction];
    if (roomId) {
        return Room.getRoom(roomId);
    } else {
        output.noPath();
    }
}

function confused() {
    output.confused();
}

module.exports = Room;