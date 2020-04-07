const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const Udaan = new Schema({
    udaan_subject: {
        type: String,
        required: true
    },
    udaan_contribution: {
        type: String,
        required: true
    },
    udaan_start_date: {
        type: String,
        required: true
    },
    udaan_end_date: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

mongoose.model('udaan', Udaan);