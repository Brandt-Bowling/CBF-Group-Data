var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var clientData = new Schema ({
    name:                           {type: String, required: true},
    nameId:                         {positive: Number, negative: Number},
    peerInteraction:                {positive: Number, negative: Number},
    groupInstruction:               {positive: Number, negative: Number},
    groupInstructionWithDiscrim:    {positive: Number, negative: Number},
    answerQuestion:                 {positive: Number, negative: Number},
    participateInSong:              {positive: Number, negative: Number},
});

var model = mongoose.model('client', clientData);

module.exports = model;