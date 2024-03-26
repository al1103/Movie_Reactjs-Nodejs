const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],

    // Other user properties
  },
  { timestamps: true }
); // Adding timestamps for createdAt and updatedAt fields
module.exports = mongoose.model("User", userSchema);
