const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  slug: String,
  original_name: String,
  thumb_url: String,
  poster_url: String,
  category: String,
  description: String,
  quality: String,
  episodes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Episode" }],
  modified: {
    type: Date,
    default: Date.now,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
