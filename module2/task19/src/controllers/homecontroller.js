// useing path module for working with directories
const path = require("path");
const rootDir = require("../util/path");

//controllers for for home ('/) page.
exports.getHome = (req, res, next) => {
  console.log("GOT HOME");
  res.sendFile(path.join(rootDir, "views", "home.html"));
};