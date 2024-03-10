const Movie = require("../models/movies");
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

class AuthController {
  async deleteMovie(req, res) {
    try {
      Movie.deleteOne({ slug: req.params.slug }).then(() => res.redirect("/"));
    } catch (error) {
       res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async index(req, res, next) {
    try {
      Movie.find({}).then((movies) => {
        res.json(movies);
      });
    } catch (next) {
      next(next);
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
      res.json(movie);
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
}
module.exports = new AuthController();
