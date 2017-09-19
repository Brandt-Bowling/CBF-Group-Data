var jwt = require('express-jwt');

//attach jwt that is stored in local storage to header for http requests when api is used
var authCheck = jwt({
    secret: new Buffer('q3Vnp5j_RAZ-Ymsacq1Y7-pTVo6eVR_jI-_j3gUWUf1Bk_k65vvziWvxqh5Wdb9P'),
    audience: 'FiopVAA30FavmLNDk1z7mIInVHo7stfa'
});

module.exports = authCheck;