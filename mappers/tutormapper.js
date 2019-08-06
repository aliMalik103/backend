
var tutorModel = require('../models/tutor-model');
module.exports.convertTutor = function (tutor) {

        return {
            [tutorModel.name]: tutor.tutor_name,
            [tutorModel.contact]:tutor.tutor_contact,
            [tutorModel.description]: tutor.tutor_description

        };
    
};