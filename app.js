const express = require('express');
const routes = require('./routes/api');
const app = express();


/* INITIALIZE ROUTES  */
app.use('/api', require('./routes/api'));
//=========================================================

/* PORT */
app.listen(process.env.port || 4000, function() {
    console.log('Now listening for requests on port 4000');
});
//=========================================================
