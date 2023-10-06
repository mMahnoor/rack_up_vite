const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'projects', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  rating: { type: Number, required: true },
  reviewText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
