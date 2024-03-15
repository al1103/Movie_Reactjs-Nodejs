const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" }, 
  name: String,
  slug: String,
  embed: String, 
});

const Episode = mongoose.model("Episode", episodeSchema);

module.exports = Episode;
