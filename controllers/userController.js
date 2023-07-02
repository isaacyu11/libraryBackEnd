"use strict";

const Book = require("../models/bookModel");

exports.getAllBooks = async (req, res) => {
  try {
    const query = req.query;
    let books;

    if (query.hasOwnProperty("borrower")) {
      books = await Book.find()
        .where("borrower.borrowerName")
        .equals(query.borrower.borrowerName);
    } else {
      query.name = new RegExp(query.name, "i");
      books = await Book.find(query).where("borrower").exists(false);
    }

    res.status(200).json({
      status: "success",
      results: books.length,
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.borrow = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params.id);
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.return = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { $unset: { borrower: 1 } },
      { returnDocument: "after" }
    );
    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
