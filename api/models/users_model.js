const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Store password hash instead of plain text
    role: { type: String, default: "user" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    // Other user properties
  },
  { timestamps: true }
);



module.exports = mongoose.model("User", userSchema);
