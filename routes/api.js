const express = require('express');
const router = express.Router();

// ** REQUESTS ** ========================================

/* GET = get from database*/
router.get('/ninjas', function(req, res) {
    res.send({type: 'GET'});
});

/* POST = add to database */
router.post('/ninjas', function(req, res) {
    res.send({type: 'POST'});
});

/* PUT = update object in database*/
router.put('/ninjas/:id', function(req, res) {
    res.send({type: 'PUT'});
});

/* DELETE = remove object from database */
router.delete('/ninjas/:id', function(req, res) {
    res.send({type: 'DELETE'});
});
//=========================================================

module.exports = router;