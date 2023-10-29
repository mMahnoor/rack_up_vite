const mongoose = require('mongoose');

const schema = mongoose.Schema;

const tokens = new schema({
    reqId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    token: String,
    
});

const token_model = mongoose.model('Tokens', tokens);

module.exports = token_model;