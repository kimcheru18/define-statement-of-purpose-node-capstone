"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const answerSchema = new mongoose.Schema({
    user: {
        type: String,
        required: false
    },
    answer1: {
        type: String,
        required: false
    },
    answer2: {
        type: String,
        required: false
    },
    answer3: {
        type: String,
        required: false
    },
    answer4: {
        type: String,
        required: false
    },
    answer5: {
        type: String,
        required: false
    },
    answer6: {
        type: String,
        required: false
    },
});


const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
