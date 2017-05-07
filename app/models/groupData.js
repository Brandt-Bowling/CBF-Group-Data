var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var User = new Schema ({
    name: String
});

var model = mongoose.model('User', User);

module.exports = model;