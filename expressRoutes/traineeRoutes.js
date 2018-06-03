var express = require('express');
//var app = express();
var traineeRoutes = express.Router();

//Require Item model in routes module
var Trainee = require('../models/Trainee');

//Defined store route
traineeRoutes.route('/add').post(function (req, res) {
    var trainee = new Trainee(req.body);
      trainee.save()
        .then(item => {
         res.status(200).json({'trainee': 'Trainee added successfully'});
         })
         .catch(err => {
         res.status(400).send("unable to save to database");
         });
});

// Defined get data (index or listing) route
traineeRoutes.route('/').get(function (req, res) {
    Trainee.find(function (err, trainees){
        if(err){
            console.log(err);
        }
        else {
            res.json(trainees);
        }
    });
});

// Defined edit route
traineeRoutes.route('/edit/:id').get(function (req, res) {
    var id = req.params.id;
    Trainee.findById(id, function (err, trainee){
        res.json(trainee);
    });
});

// Defined update route
traineeRoutes.route('/update/:id').post(function (req, res) {
    Trainee.findById(req.params.id, function(err, trainee) {
        if (!trainee)
            return next(new Error('Could not load Document'));
        else {
            trainee.name = req.body.name;
            trainee.session = req.body.session;

            trainee.save().then(trainee => {
                res.json('Update complete');
            })
            .catch(err => {
                res.status(400).send("unable to update the database");
            });
        }
    });
});

// Defined delate | remove | destroy route
traineeRoutes.route('/delete/:id').get(function (req, res) {
    trainee.findByIdAndRemove({_id: req.params.id}, function(err, trainee) {
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = traineeRoutes;