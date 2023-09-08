require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const cors = require("cors");
const db = require("./config/db.js");
const UserRoute = require("./routes/UserRoute.js");
const PostRoute = require("./routes/PostRoute.js");
const CommentRoute = require("./routes/CommentRoute.js");
const serverless = require('serverless-http');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  req.db = db; // Make the MongoDB connection available in every route handler
  next();
});
if(process.env.ENVIRONMENT === "dev") {
  app.use(morgan('dev'));
}

app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/comment", CommentRoute);


if(process.env.ENVIRONMENT === "dev") {
  app.listen(PORT, () => console.log(`App listening on port:${PORT}`));
}
else {
  module.exports.handler = serverless(app)
}