"use strict";

const express = require("express");
const morgan = require("morgan");

const bookRouter = require("./routes/bookRoute");
const userRouter = require("./routes/userRoute");

const app = express();

// 1) MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json()); // parse json data from request body

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

// 2) ROUTES
app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);

module.exports = app;
