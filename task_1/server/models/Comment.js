const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  message: String,
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  post: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Post",
  },
});

module.exports = mongoose.model("Comment", commentSchema);
