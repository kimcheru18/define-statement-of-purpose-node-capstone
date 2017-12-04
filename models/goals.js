"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const goalSchema = new mongoose.Schema({
    user: {
        type: String,
        required: false
    },
    goals: {
        type: String,
        required: false
    }
});


const Goals = mongoose.model('Goals', goalSchema);

module.exports = Goals;
