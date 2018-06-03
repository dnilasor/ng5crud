var express = require('express');
//var app = express();
var sessionRoutes = express.Router();

//Require Item model in routes module
var Session = require('../models/Session');

//Defined store route
sessionRoutes.route('/add').post(function (req, res) {
    var session = new Session(req.body);
      session.save()
        .then(item => {
         res.status(200).json({'session': 'Session added successfully'});
         })
         .catch(err => {
         res.status(400).send("unable to save to database");
         });
});

// Defined get data (index or listing) route
sessionRoutes.route('/').get(function (req, res) {
    Session.find(function (err, sessions){
        if(err){
            console.log(err);
        }
        else {
            res.json(sessions);
        }
    });
});

// Defined edit route
sessionRoutes.route('/edit/:id').get(function (req, res) {
    var id = req.params.id;
    Session.findById(id, function (err, session){
        res.json(session);
    });
});

// Defined update route
sessionRoutes.route('/update/:id').post(function (req, res) {
    Session.findById(req.params.id, function(err, session) {
        if (!session)
            return next(new Error('Could not load Document'));
        else {
            session.name = req.body.name;
            session.session = req.body.session;

            session.save().then(session => {
                res.json('Update complete');
            })
            .catch(err => {
                res.status(400).send("unable to update the database");
            });
        }
    });
});

// Defined delate | remove | destroy route
sessionRoutes.route('/delete/:id').get(function (req, res) {
    session.findByIdAndRemove({_id: req.params.id}, function(err, session) {
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = sessionRoutes;