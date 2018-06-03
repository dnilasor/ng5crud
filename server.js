const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');
    traineeRoutes = require('./expressRoutes/traineeRoutes');
    listRoutes = require('./expressRoutes/listRoutes');
    sessionRoutes = require('./expressRoutes/sessionRoutes');

//using Promises here, convert to observable when possible @dnilasor
mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/trainees', traineeRoutes);
app.use('/lists', listRoutes);

const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});