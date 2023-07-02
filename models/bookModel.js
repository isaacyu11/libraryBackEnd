"use strict";

const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "必須輸入書名"],
  },
  price: {
    type: Number,
    required: [true, "必須輸入價格"],
  },
  authors: {
    type: [{ type: String, required: [true, "必須輸入作者"] }],
    required: [true, "必須輸入作者"],
  },
  borrower: {
    borrowerName: String,
    timestamp: Date,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
