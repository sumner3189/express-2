const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Import the book model
const Book = require("../model/book");

// DELETE route to delete a book
router.delete("/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("Book deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
