const router = require("express").Router();
const { getUser } = require("../controllers/UserController");
router.post("/login", getUser);
module.exports = router;
