const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const app = express();



/* CONNECT TO MONGODB */
mongoose.connect('mongodb://localhost/owheroes');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json()); 

/* INITIALIZE ROUTES  */
app.use('/api', require('./routes/api'));

/* ERROR HANDLER */
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(422).send({error: err.message})
});
/* PORT */
app.listen(process.env.port || 4000, function() {
    console.log('Now listening for requests on port 4000');
});
//=========================================================
