"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const saveFreeStyleSchema = new mongoose.Schema({
    user: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: false
    },
});


const SaveFreeStyle = mongoose.model('SaveFreeStyle', saveFreeStyleSchema);

module.exports = SaveFreeStyle;
