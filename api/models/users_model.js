const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }], // Reference to the Movie model
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }], // Reference to the Comment model

    // Other user properties
  },
  { timestamps: true }
); // Adding timestamps for createdAt and updatedAt fields

const User = mongoose.model("User", userSchema);

module.exports = User;
