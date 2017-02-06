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

app.get('/api/public', function(req, res) {
    res.json({ message: "Hello from public"});
});

app.get('/api/private', authCheck, function(req, res) {
    res.json({ message: "Hello from private"});
});

app.listen(3001);
console.log('Listening on 3001');