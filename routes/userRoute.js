"use strict";

const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/").get(userController.getAllBooks);

router.route("/borrow/:id").patch(userController.borrow);

router.route("/return/:id").patch(userController.return);

module.exports = router;
