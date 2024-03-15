const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
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

commentSchema.index({ movie: 1 }); 
commentSchema.index({ createdAt: -1 }); 

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
