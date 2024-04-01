const User = require("../models/users_model");
const Comment = require("../models/Comment");
const Movie = require("../models/movies");

const jwt = require("jsonwebtoken");

class UsersController {
  async createUser(req, res) {
    try {
      // 1. Check for missing fields
      if (
        !req.body ||
        !req.body.username ||
        !req.body.email ||
        !req.body.password
      ) {
        return res.status(400).json({
          error:
            "Invalid request body. Missing required fields: username, email, password.",
        });
      }

      // 2. Extract user data
      const { username, email, password } = req.body;

      // 3. Validate email format
      const emailRegex = /^\w+@[a-zA-Z\d\-.]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          error: "Invalid email format. Please provide a valid email address.",
        });
      }

      // 4. Check for existing username (optional, adjust based on your needs)
      const existingUserByUsername = await User.findOne({ username });
      if (existingUserByUsername) {
        return res.status(409).json({ error: "Username already exists." });
      }

      // 5. Check for existing email (recommended)
      const existingUserByEmail = await User.findOne({ email });
      if (existingUserByEmail) {
        return res.status(409).json({ error: "Email address already in use." });
      }

      // 6. Validate password complexity
      const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/;
      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          error:
            "Password must be 8-40 characters, contain at least one uppercase, one lowercase, one digit, and one letter.",
        });
      }

      // 7. Hash password before saving

      // 8. Create and save the new user in a single step (combined for efficiency)
      const newUser = new User({ username, email, password });
      await newUser
        .save()
        .then(() => {
          res.status(201).json({
            status: "success",
            message: "User created successfully",
          });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
        });
    } catch (error) {
      // Handle unexpected errors
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async authenticateUser(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email }); // Include passwordHash field

      if (!user || !user._id) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
      const isPasswordValid = password;

      console.log(isPasswordValid);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      const token = jwt.sign(
        { userId: user._id, role: user.role },
        "zilong-zhou",
        {
          expiresIn: "24h",
        }
      );

      const sanitizedUserData = {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      };
      console.log(sanitizedUserData);
      res.status(200).json({
        status: "success",
        token,
        data: sanitizedUserData,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
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
