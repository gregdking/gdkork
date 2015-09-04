var input = require('./input'),
    output = require('./output');

function Game(world) {
    this.world = world;
}

Game.prototype.start = function () {
    init();
    loop(this);
};

function init() {
    input.init();
    output.welcome();
}

function loop(self, quit) {
    if (quit) {
        quitGame();
    } else {
        continueGame(self);
    }
}

function quitGame() {
    output.goodbye();
    setTimeout(process.exit.bind(process), 1);
}

function continueGame(self) {
    self.world.visit();
    return input.prompt()
        .then(interact.bind(null, self))
        .then(loop.bind(null, self));
}

function interact(self, command) {
    if (command === 'q') { return true; }
    self.world.interact(command);
}

module.exports = Game;