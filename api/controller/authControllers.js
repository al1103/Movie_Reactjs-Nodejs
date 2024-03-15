const Movie = require("../models/movies");
const jwt = require("jsonwebtoken");

const User = require("../models/users_model"); // Assuming your Mongoose model is named 'User'


class AuthController {
  async index(req, res) {
    try {
      Movie.find({}).then((movies) => {
        res.json(movies);
      });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async addMovie(req, res, next) {
    const movie = new Movie(req.body);
    try {
      const checkNameAlready = await Movie.findOne({ name: req.body.name });
      if (checkNameAlready) {
        return res.status(409).json({ message: "Tên phim đã tồn tại" });
      }

      const checkSlugAlready = await Movie.findOne({ slug: req.body.slug });
      if (checkSlugAlready) {
        return res.status(409).json({ message: "Slug đã tồn tại" });
      }

      await movie.save();
      res.status(201).json({ message: "Phim đã được tạo thành công" });
    } catch (error) {
      next(error);
    }
  }
  async getOneFilm(req, res, next) {
    try {
      const movie = await Movie.findOne({ _id: req.params.id });
      if (!movie) {
        return res.status(404).json({ message: "Phim không có" });
      } else {
        res.status(200).json(movie);
      }
    } catch (error) {
      next(error);
    }
  }
  async editMovie(req, res, next) {
    try {
      await Movie.updateOne({ slug: req.params.slug }, req.body).then(() =>
        res.json({ message: "Phim đã được cập nhật" })
      );
    } catch (error) {
      next(error);
    }
  }
  async  getListUser(req, res) {
    try {
      const currentPage = parseInt(req.query.page) || 1;
      const perPage = 8;
  
      // Calculate the number of documents to skip based on the current page
      const skip = (currentPage - 1) * perPage;
  
      // Query the database for users with pagination
      const users = await User.find({}).skip(skip).limit(perPage);
  
      // Count total number of documents to calculate total pages
      const totalUsers = await User.countDocuments();
      const totalPage = Math.ceil(totalUsers / perPage);
  
      // Send the response with users, current page, and total pages
      res.json({ users, currentPage, totalPage });
    } catch (error) {
      // Handle any errors that occur during the process
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async listMovie(req, res) {
    try {
      const currentPage = parseInt(req.query.page) || 1;
      const perPage = 8;
      // Lấy dữ liệu cho trang hiện tại
      const skip = (currentPage - 1) * perPage;
      const movies = await Movie.find({}).skip(skip).limit(perPage); // Fixed variable name 'users' to 'movies'
      // Đếm tổng số trang
      const totalMovies = await Movie.countDocuments(); // Use countDocuments() directly
      const totalPage = Math.ceil(totalMovies / perPage); // Calculate total pages
      res.status(200).json({ movies, currentPage, totalPage }); // Fixed object key 'Movie' to 'movies' for consistency
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async deleteMovie(req, res) {
    try {
      const result = await Movie.deleteOne({ _id: req.params.id });
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Phim không tồn tại" });
      }
      res.json({ message: "Phim đã được xóa" });
    } catch (error) {
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    }
  }
  async UpdateMovie(req, res) {
    try {
      const result = await
        Movie.updateOne({ _id: req.params.id }, req.body);
      if (result.nModified === 0) {
        return res.status(404).json({ message: "Phim không tồn tại" });
      }
      res.json({ message: "Phim đã được cập nhật" });
    }
    catch (error) {
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    }
  }
}

module.exports = new AuthController();
