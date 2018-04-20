var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
/* GET USER BY ID */
router.get('/filter/id/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, post) {
        if (err) return next(err);

            res.json(post);
    });
});
/* GET USER BY NAME*/
router.get('/filter/name/:name', function(req, res, next) {
    User.find({"nombre":req.params.name}, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});
/* GET USER BY APELLIDOS*/
router.get('/filter/surnames/:apellidos', function(req, res, next) {
    User.find({"apellidos":req.params.apellidos}, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

/* GET USERS BY ROL*/
router.get('/filter/rol/:rol', function(req, res, next) {
    User.find({"rol":req.params.rol}, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});
/* GET USERS BY STATE*/
router.get('/filter/estado/:state', function(req, res, next) {
    User.find({"estado":req.params.state}, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

/* GET USERS ORDERED BY NAME */
router.get('/filter/sort', function(req, res, next) {
    User.find({}, null, {sort: {nombre: 1 }}, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});
/* GET LOGIN */
router.get('/logn/:nombre/:password', function(req, res, next) {
    User.findOne({"nombre":req.params.nombre,"password":req.params.password}, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });

});
/* CREATE NEW USER  */
router.post('/newUser', function(req, res, next) {
    User.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE AND USER  */
router.put('/:id', function(req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        if(post===null){
            res.json("no actualitza");

        }
        res.json("actualitzat");
    });
});

module.exports = router;