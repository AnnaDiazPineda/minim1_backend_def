var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Subject = require('../models/subject');

/* GET ALL SUBJECTS */
router.get('/', function(req, res, next) {
    Subject.find().populate('students').exec(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE SUBJECT BY ID */
router.get('/:id', function(req, res, next) {
    Subject.findById(req.params.id).populate('students').exec(function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE SUBJECT */
router.post('/', function(req, res, next) {
    Subject.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE SUBJECT */
router.put('/:id', function(req, res, next) {
    Subject.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE SUBJECT */
router.delete('/:id', function(req, res, next) {
    Subject.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* ADD STUDENT TO A SUBJECT */
router.post('/:id/students/:idstudents', function (req, res, next) {
    console.log('subject routes -- params.students= ' + req.params.idstudents);
    Subject.update({ _id: req.params.id },
        {"$push": { "students" :  req.params.idstudents }},
        function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
});

/* ADD STUDENT TO SUBJECT */
router.put('/:id/students/:idstudents', function (req, res, next) {
    Subject.update({ _id: req.params.id },
        {"$pull": { "students" :  req.params.idstudents }},
        function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
});

/* GET SINGLE STUDENT OF SUBJECT */
router.get('/:id/students/:idstudent', function(req, res, next) {
    console.log(req.params.id);
    Subject.findById(req.params.id)
        .populate('students')
        .where( )
        .exec(function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;