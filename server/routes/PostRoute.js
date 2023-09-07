const router = require("express").Router();
const { getAllPosts, createPost } = require("../controllers/PostController");
router.post("/create", createPost);
router.get("/get", getAllPosts);
module.exports = router;
