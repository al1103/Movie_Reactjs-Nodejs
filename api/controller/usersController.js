const User = require("../models/users_model");
const Comment = require("../models/Comment");
const Movie = require("../models/movies");
const db = require("../db");
const jwt = require("jsonwebtoken");

class UsersController {
  async createUser(req, res) {
    try {
      // Extract username and password from the request body with error handling
      const { username, password } = req.body;

      if (!username || !password) {
        return res
          .status(400)
          .json({ message: "Missing required fields: username and password" });
      }

      // Check if the username already exists in the database
      const existingUser = await User.findOne({ username });

      // If username exists, return a conflict response
      if (existingUser) {
        return res.status(409).json({ error: "Username already exists" });
      }

      // Create a new user instance with the plain password
      const newUser = new User({
        username,
        password,
      });

      // Save the new user to the database
      await newUser.save();

      // Return success response with sensitive information omitted
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" }); // Log the actual error for debugging
    }
  }
  async authenticateUser(req, res) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const isPasswordValid = (await password) === user.password;
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      const data = { user };
      const token = jwt.sign(data, "zilong-zhou", {
        expiresIn: "24h",
      });

      // Omit password from response for security reasons
      const dataUser = { ...user._doc, password: undefined };
      res.status(200).json({
        status: "success",
        token,
        dataUser,
      });
    } catch (error) {
      console.error(error); // Log the error for debugging
      return res.status(500).json({ error: "Internal server error" }); // Handle unexpected errors gracefully
    }
  }
  async postComment(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodeToken = jwt.verify(token, "zilong-zhou");
      const authorId = decodeToken.user._id;
      const contents = req.body.comment;
      const movieId = req.params.id; // Assuming movie ID is in the URL path
      if (!movieId) {
        throw new Error("Movie ID missing"); // Handle missing ID gracefully
      }

      const newComment = new Comment({
        content: contents,
        User: authorId,
      });
      await newComment.save();

      const updatePromises = [];
      if (movieId) {
        updatePromises.push(
          Movie.findByIdAndUpdate(
            movieId,
            { $push: { comments: newComment._id } },
            { new: true }
          )
        );
      }
      if (authorId) {
        updatePromises.push(
          User.findByIdAndUpdate(
            authorId,
            { $push: { comments: newComment._id } },
            { new: true }
          )
        );
      }

      if (updatePromises.length) {
        await Promise.all(updatePromises);
      }

      res
        .status(201)
        .json({ message: "Comment created successfully", comment: newComment });
    } catch (error) {
      console.error("Error creating comment:", error.message);
      res.status(500).json({ error: "Internal server error" }); // Avoid leaking specific error details
    }
  }
  // async GetComment(req, res) {
  //   const userIds = req.params.id;

  //   const users = db.collection("users").find({ _id: { $in: userIds } });

  //   // Lấy tên và avatar của người dùng
  //   users.forEach((user) => {
  //     const userInfos = {
  //       name: user.username,
  //     };

  //     // Kết hợp thông tin user với bình luận
  //     const commentsWithUserInfo = Comment.map((comment) => {
  //       if (comment.user === user._id) {
  //         return {
  //           ...comment,
  //           user: userInfos,
  //         };
  //       }
  //       return comment;
  //     });

  //     res.status(200).json(commentsWithUserInfo);
  //   });
  // }
}

module.exports = new UsersController();
