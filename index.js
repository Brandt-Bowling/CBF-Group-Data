var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');
var path = require('path');

app.use(cors());

//attach jwt that is stored in local storage to header for http requests
var authCheck = jwt({
    secret: new Buffer('q3Vnp5j_RAZ-Ymsacq1Y7-pTVo6eVR_jI-_j3gUWUf1Bk_k65vvziWvxqh5Wdb9P'),
    audience: 'FiopVAA30FavmLNDk1z7mIInVHo7stfa'
});

app.set('port', (process.env.PORT || 5000));

//set static files to www folder
app.use(express.static(__dirname + '/www'));

//render single index file for front end
app.get('*', function(request, response) {
  response.sendFile('./www/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  console.log("at" + __dirname);
});