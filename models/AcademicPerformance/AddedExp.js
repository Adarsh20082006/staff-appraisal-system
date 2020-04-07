const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const AddedExp = new Schema({
    subject_name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    exp_name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

mongoose.model('addedexp', AddedExp);