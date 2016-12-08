var express = require('express'),
    expressLoad = require('express-load');

module.exports = () => {
    var app = express();

    // Set port
    app.set('port', 3000);

    // Set static directory
    app.use(express.static('public'));


    // Config express load
    expressLoad('controllers', {cwd: 'app'})
        .then('routes')
        .into(app);

    return app;

}