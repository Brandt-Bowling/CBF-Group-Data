require('dotenv').config()
console.log(process.env.DB);
var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var database = require('./config/database.js');
var routes = require('./app/routes');
app.use(cors());
console.log(process.env.TEST + '\n')

// body-parser middleware ==========================================================================================================
app.use(bodyParser.json());

// routes ==========================================================================================================================
app.use('/api', routes);

//render single index file for front end
app.get('/', function (request, response) {
    response.sendFile(path.resolve("www/index.html"));
});

// configuration ===================================================================================================================
//initialize connection to database
mongoose.connect(process.env.DB, {
    useMongoClient: true
}, function(err, db){
    if (err) {
        console.log('Unable to connect to mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', process.env.DB);
    }
});    
app.use(express.static(path.join(__dirname, '/www')));                            //set the static files location
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));  //finally getting the scripts to load on the html!

// listen ==========================================================================================================================

app.listen(port);
console.log('Node app is running on port ' + port);
console.log("at " + __dirname);