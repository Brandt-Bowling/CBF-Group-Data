var User = require('./models/groupData');
var express = require('express');
var router = express.Router();
//api goes here
router.post('/results', function (request, response) {
    var brandt = new User();
    brandt.name = request.body.name;
    brandt.save(function (err, brandt) {
        if (err) {
            console.log(err);
        } else {
            console.log(brandt);
        }

    });
    response.send('asl;dkjf;l');
});

module.exports = router;