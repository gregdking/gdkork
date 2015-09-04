var _ = require('lodash'),
    input = require('./input'),
    output = require('./output'),
    World = require('./world'),
    Room = require('./room'),
    Game = require('./game');

new Game(
    new World(Room.getRoom('./blue-room'))
).start();
