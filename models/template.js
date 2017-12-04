"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const templateSchema = new mongoose.Schema({
    user: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: false
    }
});


const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
