const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // Remove leading/trailing whitespace
    maxlength: 255, // Optional: Set a maximum length for the name
  },
  slug: {
    type: String,
    unique: true, // Ensure unique slugs to avoid conflicts
    trim: true,
    lowercase: true, // Convert slug to lowercase for consistency
  },
  original_name: {
    type: String,
    trim: true,
  },
  thumb_url: {
    type: String,
    trim: true,
    validate: { // Optional: Add validation for valid URL format
      validator: (url) => {
        return url.match(/^(http|https):\/\/[^ "]+$/);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  poster_url: {
    type: String,
    trim: true,
    validate: { // Optional: Add validation for valid URL format
      validator: (url) => {
        return url.match(/^(http|https):\/\/[^ "]+$/);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  modified: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    // enum: ['ACTION', 'COMEDY', 'DRAMA', 'THRILLER', 'HORROR', 'SCI-FI', 'OTHER'], // Optional: Define allowed categories
    // trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  quality: {
    type: String,
    trim: true,
  },
  episodes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Episode', // Reference the Episode model
    },
  ],
 
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment', // Reference the Comment model
    },
  ],
  
});

module.exports = mongoose.model('Movie', movieSchema);


