const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

commentSchema.index({ movie: 1 }); 
commentSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Comment", commentSchema);
