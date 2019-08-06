const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let suggestion = new Schema({
    type: {
        type: String
    },
    description: {
        type: String
    },
    priority: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('suggestion', suggestion);