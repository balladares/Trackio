var app = require('./config/express')();
var server = require('http').Server(app);

// Get tracking ~socket.io
require('./config/tracking')(server);

// Init server
server.listen(app.get('port'), () => {
    console.log('Trackio are running at ' + app.get('port'));
});