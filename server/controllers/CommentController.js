const Comment = require("../models/Comment");

const createComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(200).send({ comment: savedComment });
  } catch (err) {
    res.status(501).send({ error: err.message });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate(["author", "post"]).exec();
    if (comments) res.status(200).send({ comments });
    else {
      res.status(200).send({ message: "No Commments for this post" });
    }
  } catch (err) {
    res.status(501).send({ error: err.message });
  }
};

const getCommentsByPostId = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.body.post })
      .populate(["author", "post"])
      .exec()
      .then((comments) => {
        if (comments) return comments;
        else {
          return { message: "No Commments for this post" };
        }
      });
    res.status(200).send({ comments });
  } catch (err) {
    res.status(501).send({ error: err.message });
  }
};

module.exports = { createComment, getCommentsByPostId, getComments };
