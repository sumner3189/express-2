const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("../models/Book");
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB}@donidatabase.ctpyknw.mongodb.net/?retryWrites=true&w=majority`
);

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const books = await Book.find();
  res.send(books);
});
router.get("/new", function (req, res, next) {
  res.render("create");
});
router.post("/new", async function (req, res, next) {
  await Book.create(req.body);
  // const book = {
  //   isbn: req.body.isbn,
  //   title: req.body.title,
  //   subtitle: req.body.subtitle,
  //   author: req.body.author,
  //   published: req.body.published,
  //   publisher: req.body.publisher,
  //   pages: req.body.pages,
  //   description: req.body.description,
  //   website: req.body.website,
  // };

  res.redirect("/books");
});
// router.get("/:id", function (req, res, next) {
//   const getOneBook = books.filter((book) => book.isbn === req.params.id);
//   res.send(`The book is ${getOneBook[0].title}`);
// });
// router.put("/:id", function (req, res, next) {
//   const getOneBook = books.filter((book) => book.isbn === req.params.id);
//   res.send(`Book Has Been Updated ${getOneBook[0].title}`);
// });

// router.delete("/:id", async (req, res, next) => {
//   const { id } = req.params;
//   const filterData = await books.filter((book) => book.isbn !== id);
//   res.json({ message: `We deleted the book with id: ${id}`, filterData });
// });

module.exports = router;
