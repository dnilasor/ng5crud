var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for trainee Items
var Trainee = new Schema({
    name: {
        type: String
    },
    session: [
        {body:"string",
         type: mongoose.Schema.Types.ObjectId, ref: 'Session'
        }]        
},{
        collection: 'trainees'
});



module.exports = mongoose.model('Trainee', Trainee);