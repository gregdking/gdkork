function World(initialRoom) {
    this.currentRoom = initialRoom;
}

World.prototype.getCurrentRoom = function () {
    return this.currentRoom;
};

World.prototype.setCurrentRoom = function (room) {
    this.currentRoom = room;
};

World.prototype.visit = function () {
    this.getCurrentRoom().visit();
};

World.prototype.interact = function (command) {
    var newRoom = this.getCurrentRoom().interact(command);
    if (newRoom) {
        this.setCurrentRoom(newRoom);
    }
};

module.exports = World;