// The Path module provides a way of working with directories and file paths.
const path = require("path");

const rootDir = require("../util/path");
// Import models
const Booking = require("../models/home-model");

exports.getHome = (req, res, next) => {
  console.log("GET IT");
  res.sendFile(path.join(rootDir, "views", "home.html"));
};