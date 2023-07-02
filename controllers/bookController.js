"use strict";

const Book = require("../models/bookModel");

exports.getAllBooks = async (req, res) => {
  try {
    req.query.name = new RegExp(req.query.name, "i");
    const books = await Book.find(req.query);
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

exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        book: newBook,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!book) {
      throw new Error("ID 不存在！");
    } else {
      res.status(200).json({
        status: "success",
        data: {
          book,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      throw new Error("ID 不存在！");
    } else {
      res.status(204).json({
        status: "success",
        data: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
