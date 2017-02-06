var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');
var path = require('path');

app.use(cors());

var authCheck = jwt({
    secret: new Buffer('q3Vnp5j_RAZ-Ymsacq1Y7-pTVo6eVR_jI-_j3gUWUf1Bk_k65vvziWvxqh5Wdb9P'),
    audience: 'FiopVAA30FavmLNDk1z7mIInVHo7stfa'
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/views');

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  console.log("at" + __dirname);
});