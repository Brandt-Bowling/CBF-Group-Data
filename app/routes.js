var User = require('./models/groupData');
var express = require('express');
var router = express.Router();

//api goes here
router.post('/results', function (request, response) {
    User.create(request.body);
    response.send('asl;dkjf;l');
});

module.exports = router;