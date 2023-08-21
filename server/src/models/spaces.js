const mongoose = require('mongoose');

const schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const spaces = new schema({
  name: String,
  institute_id: String,
  teachers_id: String,
  students_id: String
});

const spaces_model = mongoose.model('Spaces', spaces)

module.exports = spaces_model;