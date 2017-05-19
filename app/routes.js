var client = require('./models/groupData');
var express = require('express');
var router = express.Router();

//api goes here
router.post('/results', function (request, response) {
    console.log('request', request);
    // console.log('request body', request.body);
    client.create(request.body);
    response.send(client);
});

// router.get('/results/:dateCreated', function(request, response) {
//     request.params
//     mongoose.get(client, '')
// })

module.exports = router;