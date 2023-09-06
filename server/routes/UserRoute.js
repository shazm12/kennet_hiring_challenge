const router = require("express").Router();
const { getUser } = require("../contollers/UserController");
router.post("/login", getUser);
module.exports = router;
