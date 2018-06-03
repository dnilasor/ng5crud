var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define schema and collection for training sessions


var Session = new Schema({
    dateTime: {
        type: String
    },
    location: {
        type: String
    },
    termFor: {
        type: String
    }
},{
    collection: 'sessions'
});

module.exports = mongoose.model('Session', Session);