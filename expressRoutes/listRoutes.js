var express = require('express');
var aapp = express();
var listRoutes = express.Router();

// Require List and Trainee item models in our routes module
var Trainee = require('../models/Trainee');
var List = require('../models/List');

// Define list storage route
listRoutes.route('/populate').post(function (req, res) {
    var list = new List(req.body);
    list.populate({
        path: 'members',
        populate: { path: 'members' }
    });
    list.save()
      .then(item => {
      res.status(200).json({'list': 'List added successfully'});
      })
      .catch(err => {
      res.status(400).send(("Unable to save list to database"));
      });
});

// Define route to get list data
listRoutes.route('/').get(function (req, res) {
    list.findOne(function (err, lists) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(lists);
        }
    });
});

// Define route to update list data
listRoutes.route('/update/:id').post(function (req, res) {
    List.findById(req.params.id, function(err, list) {
        if (!list)
            return next(new Error('Could not load Document'));
        else {
            list.members = req.body.members;

            list.save().then(list => {
                res.json('Update complete');
            })
            .catch(err => {
                res.status(400).send("Unable to update the list");
            });
        }
    });
});

module.exports = listRoutes;
