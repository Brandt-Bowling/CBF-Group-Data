var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var clientData = new Schema({
    name: { type: String, required: true },
    "Name ID":                          { positive: Number, totalNumber: Number },
    "Peer Interaction":                 { positive: Number, totalNumber: Number },
    "Follow Group Instructions":        { positive: Number, totalNumber: Number },
    "Follow Instructions With Discrim": { positive: Number, totalNumber: Number },
    "Answer Question":                  { positive: Number, totalNumber: Number },
    "Particiapte In Song":              { positive: Number, totalNumber: Number },
    "Participate Without Behavior":     { positive: Number, totalNumber: Number },
    "Tolerate Prompt":                  { positive: Number, totalNumber: Number },
    "Attend For 50%":                   { positive: Number, totalNumber: Number },
});

var model = mongoose.model('client', clientData);

module.exports = model;