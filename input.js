var Q = require('q'),
    prompt = require('prompt'),
    _ = require('lodash');

exports.init = function () {
    prompt.message = '';
    prompt.delimiter = '';
    prompt.start();
};

exports.prompt = function () {
    var property = { name: 'command', description: '>' };
    return qPrompt(property)
        .then(convertToCommand);
};

function qPrompt(properties) {
    return Q.ninvoke(prompt, "get",properties);
}

function convertToCommand(response) {
    return _.first(response.command).toLowerCase();
}