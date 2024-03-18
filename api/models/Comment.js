const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 1, // Enforce a minimum content length for validation
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true, // Ensure a user is always associated with a comment
  }, 
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true, // Ensure a movie is always associated with a comment
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Indexes for efficient querying
commentSchema.index({ movie: 1 }); // Index for finding comments by movie
commentSchema.index({ createdAt: -1 }); // Index for fetching recent comments (descending)

module.exports = mongoose.model('Comment', commentSchema);
