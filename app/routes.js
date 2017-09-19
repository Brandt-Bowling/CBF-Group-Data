var client = require('./models/groupData');
var express = require('express');
var authCheck = require('../config/auth');
var router = express.Router();

//api goes here
router.post('/results', authCheck, function (request, response) {
    client.create(request.body).then(function (client) {
        response.send(client);
    })
});

router.get('/results', authCheck, function (request, response) {
    client.find({date: request.query.date}).then(function(clients, err) {
        response.send(clients);
    });
});

module.exports = router;