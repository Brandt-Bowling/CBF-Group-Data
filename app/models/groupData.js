var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var clientData = new Schema ({
    name:                           {type: String, required: true},
    nameId:                         {positive: Number, totalNumber: Number},
    peerInteraction:                {positive: Number, totalNumber: Number},
    groupInstruction:               {positive: Number, totalNumber: Number},
    groupInstructionWithDiscrim:    {positive: Number, totalNumber: Number},
    answerQuestion:                 {positive: Number, totalNumber: Number},
    participateInSong:              {positive: Number, totalNumber: Number},
});

var model = mongoose.model('client', clientData);

module.exports = model;