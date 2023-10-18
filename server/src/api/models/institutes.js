const mongoose = require('mongoose');

const schema = mongoose.Schema;

const institutes = new schema({
    name: String,
    email: String,
    address: String,
    phone: String,
    password: String
});

const institutes_model = mongoose.model('Institutes', institutes);

module.exports = institutes_model;