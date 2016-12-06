var net = require('net');
var Handler = require('./helpers/Helper.js');

module.exports = { ping: ping };

function ping(options, callback) {
    options = Handler.validate(options);
    var start = process.hrtime();
    var socket = net.Socket();
    socket.setTimeout(options.timeout);
    socket.connect(options.port, options.address);
    socket.on('connect', function () {
        this.destroy();
        return callback(null, Handler.build(null, options, getTimeDiff(start)));
    });
    socket.on('error', function (err) {
        this.destroy();
        return callback(err, Handler.build(err, options, getTimeDiff(start)));
    });
    socket.on('timeout', function () {
        this.destroy();
        return callback('Timeout', Handler.build('timeout', options, getTimeDiff(start)));
    });
}

function getTimeDiff(start) {
    var diff = process.hrtime(start);
    return (diff[0] * 1e9 + diff[1]) / 1e6;
}