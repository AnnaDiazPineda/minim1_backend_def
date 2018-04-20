var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    rol: String,
    password: String,
    estado: String
});

module.exports = mongoose.model('User', UserSchema);
