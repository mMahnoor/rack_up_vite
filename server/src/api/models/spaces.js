const mongoose = require('mongoose');

const schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const spaces = new schema({
  name: String,
  students: {
    type: Array,
    default: [[]]
  },
  supervisors: {
    type: Object,
    default: {placeholder: null}
  },
  projects: {
    type: Object,
    default: {placeholder: null}
  }
});

const spaces_model = mongoose.model('Spaces', spaces)

module.exports = spaces_model;