const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  isbn: Number,
  title: String,
  author: String,
  publisher: String,
  subtitle: String,
  published: String,
  pages: Number,
  description: String,
  website: String,
});
module.exports = mongoose.model("Book", bookSchema)