var path = require("path");
module.exports = function(app) {
    //api goes here
    //
    //
    //

    //render single index file for front end
    app.get('/', function(request, response) {
        response.sendFile(path.resolve("www/index.html"));
    });
};