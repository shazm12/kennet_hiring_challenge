const router = require("express").Router();
const { getCommentsByPostId, createComment, getComments } = require("../controllers/CommentController");
router.post("/create", createComment);
router.post("/getByPostId", getCommentsByPostId);
router.get("/get", getComments);
module.exports = router;
