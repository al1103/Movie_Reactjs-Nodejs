const Movie = require("../models/movies");
const jwt = require("jsonwebtoken");

const User = require("../models/users_model"); // Assuming your Mongoose model is named 'User'

// exports.register = async (req, res) => {
//   const username = req.body.username.toLowerCase();
//   const user = await userModel.getUser(username);
//   if (user) res.status(409).send("Tên tài khoản đã tồn tại.");
//   else {
//     const hashPassword = req.body.password;
//     const newUser = {
//       username: username,
//       password: hashPassword,
//     };
//     const createUser = await userModel.createUser(newUser);
//     if (!createUser) {
//       return res
//         .status(400)
//         .send("Có lỗi trong quá trình tạo tài khoản, vui lòng thử lại.");
//     }
//     return res.send({
//       username,
//     });
//   }
// };
const pageLimit = 8;

class AuthController {
  async deleteMovie(req, res) {
    try {
      Movie.deleteOne({ slug: req.params.slug }).then(() => res.redirect("/"));
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
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
  async editMovie(req, res, next) {
    try {
      await Movie.updateOne({ slug: req.params.slug }, req.body).then(() =>
        res.json({ message: "Phim đã được cập nhật" })
      );
    } catch (error) {
      next(error);
    }
  }
  async getUser(req, res) {
    try {
      const currentPage = parseInt(req.query.page) || 1;
      const perPage = 8;
      // Lấy dữ liệu cho trang hiện tại
      const skip = (currentPage - 1) * perPage;
      const users = await User.find({}).skip(skip).limit(perPage);
      // Đếm tổng số trang
      const totalPage = Math.ceil((await User.countDocuments()) / perPage);
      res.json({ users, currentPage, totalPage });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async  listMovie(req, res) {
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
}

module.exports = new AuthController();
