const mongoose = require('mongoose');

const schema = mongoose.Schema;

const users = new schema({
    category: String,
    role: String,
    name: String,
    // student_id: String,
    email: String,
    phone: String,
    password: String,
    institute: String
}, {strict : false});

const user_model = mongoose.model('Users', users);

module.exports = user_model;