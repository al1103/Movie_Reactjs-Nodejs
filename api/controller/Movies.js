const { multipleMongooseToObject } = require("../util/mongoose");
const { mongooseToObject } = require("../util/mongoose");
const Movie = require("../models/movies");
const { MongoClient } = require("mongodb");
const User = require("../models/users_model");
const Comment = require("../models/Comment");
const config = require("../db");
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
      res.status(200).json({ status: "success", length: data.length, data });
    } catch (err) {
      next(err);
    }
  }
  async getOneFilm(req, res, next) {
    try {
      console.log(req.params.slug)
      const movie = await Movie.findOne({ slug: req.params.slug });
      if (!movie) {
        return res.status(404).json({ message: "Phim không có" });
      } else {
        res
          .status(200)
          .json({ status: "success", length: movie.length, movie });
      }
    } catch (error) {
      next(error);
    }
  }
  async getComments(req, res, next) {
    try {
      const movieId = req.params.id;
      console.log(movieId)
      // Find the movie and populate comments with user data efficiently
      const movie = await Movie.findById(movieId).populate("comments");
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      const comments = await Comment.find({
        _id: { $in: movie.comments },
      }).populate("User", "username avatar")
      res
        .status(200)
        .json({ status: "success", length: comments.length, comments });
    } catch (error) {
      console.error("Error getting comments:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async SearchMovie(req, res, next) {
    try {
      let queryStr = JSON.stringify(req.query.name);
      queryStr = queryStr.replace(
        /\b(gte\|gt\|lte\|lt)\b/g,
        (match) => `$${match}`
      );
      let data = await Movie.find(JSON.parse(queryStr));

      if (req.query.sort) {
        const sortBy = req.query.sort.split(",").join(" ");
        return (data = data.sort(sortBy));
      }
      res.status(200).json({
        status: "success",
        length: data.length,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new Movies();
