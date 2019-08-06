const mongoose = require('mongoose');
var tutorModel=require('./tutor-model')
const Schema = mongoose.Schema;

let tutor = new Schema({
   [tutorModel.name]:String,
   [tutorModel.contact]:String,
   [tutorModel.description]:String
});

module.exports = mongoose.model('tutor', tutor);