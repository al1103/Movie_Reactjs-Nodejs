const { multipleMongooseToObject } = require("../util/mongoose");
const { mongooseToObject } = require("../util/mongoose");
const Movie = require("../models/movies");
const User = require("../models/users_model");
const Comment = require("../models/Comment");
class Movies {
  async index(req, res, next) {
    try {
      const data = await Movie.find({});
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
  async getMovies(req, res, next) {
    try {
      const data = await Movie.find({});
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  async getOneFilm(req, res, next) {
    try {
      const movie = await Movie.findOne({ slug: req.params.slug });
      if (!movie) {
        return res.status(404).json({ message: "Phim không có" });
      } else {
        res.status(200).json(movie);
      }
    } catch (error) {
      next(error);
    }
  }
  async getComments(req, res, next) {
    try {
      const movieId = req.params.id;

      // Find the movie and populate comments with user data efficiently
      const movie = await Movie.findById(movieId).populate("comments");
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      const comments = await Comment.find({ _id: { $in: movie.comments } }).populate(
        "User",
        "username avatar"
      );
      res.status(200).json(comments);
    } catch (error) {
      console.error("Error getting comments:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = new Movies();
