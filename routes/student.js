var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
var Student = require('../models/student');

/* GET ALL Students */
router.get('/', function(req, res, next) {
    Student.find(function (err, students) {
        if (err) return next(err);
        res.json(students);
    });
});

/* SAVE STUDENT */
router.post('/', function(req, res, next) {
    Student.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET SINGLE STUDENT BY ID */
router.get('/:id', function(req, res, next) {
    Student.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE STUDENT */
router.put('/:id', function(req, res, next) {
    Student.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE STUDENT */
router.delete('/:id', function(req, res, next) {
    Student.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;