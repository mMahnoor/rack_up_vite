const mongoose = require('mongoose');

const schema = mongoose.Schema;

const works = new schema({
    title: String,
    team: Array,
    description: String,
    files: Array,
    email: String,
    category: String,
    institute: String
}, {strict : false});

const newWork = mongoose.model('Projects', works);

module.exports = newWork;