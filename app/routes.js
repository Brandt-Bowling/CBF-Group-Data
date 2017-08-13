var client = require('./models/groupData');
var express = require('express');
var router = express.Router();

//api goes here
router.post('/results', function (request, response) {
    client.create(request.body).then(function (client) {
        response.send(client);
    })
});

router.get('/results', function (request, response) {
    client.find({date: request.query.date}).then(function(clients) {
        response.send(clients);
    });
});

module.exports = router;