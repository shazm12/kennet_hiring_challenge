const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
  dbName: "sm_app_kennet",
  useNewUrlParser: true,
  useUnifiedTopology: true// To avoid deprecation warning for findOneAndUpdate
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

module.exports = mongoose;