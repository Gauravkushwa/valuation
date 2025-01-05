const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    class: {type: mongoose.Schema.Types.ObjectId, ref: 'class', required: true},
    student: {type: mongoose.Schema.Types.ObjectId, ref: 'student', required: true},
    enrollmentDate: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);