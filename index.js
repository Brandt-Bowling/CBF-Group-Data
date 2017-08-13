var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');
var path = require('path');
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var database = require('./config/database.js');
var routes = require('./app/routes');
app.use(cors());

// body-parser middleware ==========================================================================================================
app.use(bodyParser.json());

// routes ==========================================================================================================================

app.use('/api', routes);

//render single index file for front end
app.get('/', function (request, response) {
    response.sendFile(path.resolve("www/index.html"));
});

// configuration ===================================================================================================================

mongoose.connect(database.url);                                                   //initialize connection to database
app.use(express.static(path.join(__dirname, '/www')));                            //set the static files location
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));  //finally getting the scripts to load on the html!

//attach jwt that is stored in local storage to header for http requests when api is used
var authCheck = jwt({
    secret: new Buffer('q3Vnp5j_RAZ-Ymsacq1Y7-pTVo6eVR_jI-_j3gUWUf1Bk_k65vvziWvxqh5Wdb9P'),
    audience: 'FiopVAA30FavmLNDk1z7mIInVHo7stfa'
});

// listen ==========================================================================================================================

app.listen(port);
console.log('Node app is running on port ' + port);
console.log("at" + __dirname);