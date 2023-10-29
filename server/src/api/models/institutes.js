const mongoose = require('mongoose');

const schema = mongoose.Schema;

const institutes = new schema({
    category: String,
    name: String,
    email: String,
    address: String,
    phone: String,
    password: String,
    students: Array,
    supervisors: Array,
    projects: {
        type: Object,
        default: {placeholder: null}
    }
});

const institutes_model = mongoose.model('Institutes', institutes);

module.exports = institutes_model;