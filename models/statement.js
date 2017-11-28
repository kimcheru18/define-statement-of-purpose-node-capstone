"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const statementSchema = new mongoose.Schema({
    statement: {
        type: String,
        required: false
    },
});


const Statement = mongoose.model('Statement', statementSchema);

module.exports = Statement;
