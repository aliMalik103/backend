var tutorMapper = require('../mappers/tutormapper');
var tutor = require('../models/tutor');
module.exports = {
    saveTutor: function(data) {
    var tutors = tutorMapper.convertTutor(data);
    return tutor.create(tutors);
},
getTutor:function(){
    return tutor
    .find()
    
    .lean()
    .exec();
}

}
