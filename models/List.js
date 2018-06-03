var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define schema and collection for lists of trainees 


var List = new Schema({
    members: [
        {body:"string", 
         type: mongoose.Schema.Types.ObjectId, ref: 'Trainee' 
        }]
},{
    collection: 'lists'
});

module.exports = mongoose.model('List', List);