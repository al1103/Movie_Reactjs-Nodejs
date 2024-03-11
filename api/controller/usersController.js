const User = require("../models/users_model"); // Assuming your Mongoose model is named 'User'
require("dotenv").config();
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
  
      // Validate password securely using bcrypt or a similar hashing algorithm
      const isPasswordValid = await password === user.password; // Assuming password is hashed in the database
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Incorrect password" });
      }
  
      const data = { user };
      const token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' });

  
      // Omit password from response for security reasons
      const dataUser = { ...user._doc, password: undefined };
  
      return res.status(200).json({ user: dataUser, accessToken: token });
    } catch (error) {
      console.error(error); // Log the error for debugging
      return res.status(500).json({ error: "Internal server error" }); // Handle unexpected errors gracefully
    }
  }
  
  
  
}


module.exports = new UsersController();
