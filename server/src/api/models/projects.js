const mongoose = require('mongoose');

const schema = mongoose.Schema;

const works = new schema({
    title: String,
    team: Array,
    description: String,
    files: Array,
    ratings: Array,
    reviews: Array,
    email: String,
    category: String,
    institute: String,
    uploadedAt: {
        type: Date, 
        default: Date.now 
    }
}, {strict : false});

const newWork = mongoose.model('Projects', works);

module.exports = newWork;