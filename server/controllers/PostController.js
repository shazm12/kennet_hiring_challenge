const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).send({ post: savedPost });
  } catch (err) {
    res.status(501).send({ error: err.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author").exec();
    res.status(200).send({ posts });
  } catch (err) {
    res.status(501).send({ error: err.message });
  }
};

module.exports = { getAllPosts, createPost };
