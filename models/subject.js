var mongoose = require('mongoose');

var subjectSchema = new mongoose.Schema({
    name: String,
    students: [{type: mongoose.Schema.Types.ObjectId, ref:'Student' }]
});

module.exports = mongoose.model('Subject', subjectSchema);
