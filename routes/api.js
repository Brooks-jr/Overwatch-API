const express = require('express');
const router = express.Router();
const Hero = require('../models/hero.js');

// ** REQUESTS ** ========================================

/* GET = get from database*/
router.get('/heroes', function (req, res, next) {
    Hero.find(req.query.name).then(function(hero) {
        res.send(hero);
    });
});

/* POST = add to database */
router.post('/heroes', function (req, res, next) {
    Hero.create(req.body).then(function (hero) {
        res.send(hero);
    }).catch(next);
});

/* PUT = update object in database*/
router.put('/heroes/:id', function (req, res, next) {
    Hero.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Hero.findOne({ _id: req.params.id }).then(function (hero) {
            res.send(hero);
        });
    });
});

/* DELETE = remove object from database */
router.delete('/heroes/:id', function (req, res, next) {
    Hero.findByIdAndRemove({ _id: req.params.id }).then(function (hero) {
        res.send(hero);
    });
});
//=========================================================

module.exports = router;