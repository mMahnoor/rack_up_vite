const mongoose = require('mongoose');

const schema = mongoose.Schema;

const users = new schema({
    name: String,
    category: String,
    // student_id: String,
    email: String,
    phone: String,
    password: String,
    institute: String
}, {strict : false});

const user_model = mongoose.model('Users', users);

module.exports = user_model;