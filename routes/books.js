var express = require("express");
var router = express.Router();

let data = require("../data/books");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(data.books);
});
router.get("/new", function (req, res, next) {
  res.render("index")})
router.post("/new", function (req, res, next) {
  const book = {
    isbn: req.body.isbn,
    title: req.body.title,
    subtitle: req.body.subtitle,
    author: req.body.author,
    published: req.body.published,
    publisher: req.body.publisher,
    pages: req.body.pages,
    description: req.body.description,
    website: req.body.website,
  };
  data.books.push(book);
  res.redirect("/books");
});
router.get("/:id", function (req, res, next) {
  const getOneBook = data.books.filter((book) => book.isbn === req.params.id);
  res.send(`The book is ${getOneBook[0].title}`);
});
router.put("/:id", function (req, res, next) {
  const getOneBook = data.books.filter((book) => book.isbn === req.params.id);
  res.send(`Book Has Been Updated ${getOneBook[0].title}`);
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const filterData = await data.books.filter((book) => book.isbn !== id);
  res.json({ message: `We deleted the book with id: ${id}`, data: filterData });
});

module.exports = router;
