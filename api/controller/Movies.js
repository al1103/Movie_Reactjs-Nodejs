const { multipleMongooseToObject } = require("../util/mongoose");
const { mongooseToObject } = require("../util/mongoose");
const Movie = require("../models/movies");
const Comment = require("../models/Comment");
const lunr = require("lunr");
const { json } = require("body-parser");

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
      const movie = await Movie.findOne({
        _id: req.params.slug,
      });
      console.log("movie", req.params.slug);
      if (!movie) {
        return res.status(404).json({ message: "Phim không có" });
      } else {
        res.json({ status: "success", length: movie.length, movie });
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
      const comments = await Comment.find({
        _id: { $in: movie.comments },
      }).populate("User", "username avatar");
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
      const query = req.query.name;
      const filters = req.query; // Access other query parameters
  
      // Build the search query object with a $not operator for the notword
      const searchQuery = {
        $and: [
          { name: { $regex: query, $options: "i" } }
        ],
      };
  
      // Add other filters as needed
      if (filters.category) {
        searchQuery.$and.push({ category: filters.category });
      }
      if (filters.quality) {
        searchQuery.$and.push({ quality: filters.quality });
      }
  
      const results = await Movie.find(searchQuery);
  
      res.json({
        status: "success",
        results: results,
      });
    } catch (error) {
      next(error);
    }
  }
  
  
  
}

module.exports = new Movies();
