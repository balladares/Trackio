// Import socket.io
var socketIo = require('socket.io');

module.exports = (server) => {
    var track = socketIo(server);

    // Track on user connected
    track.on('connection', (tracking) => {
        console.log('User connected');

        tracking.on('position', (geoPosition) => {
            track.emit('position', JSON.parse(geoPosition));
            console.log(geoPosition);
        })

        // User disconnected
        tracking.on('disconnected', () => {
            console.log('User are disconnected');
        });
    });
}