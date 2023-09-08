// using express
const express = require("express");

const router = express.Router();


const path = require("path");

const rootDir = require("../util/path");

const homeController = require("../controllers/homecontroller");

// create route for home ('/) page.
router.get("/", homeController.getHome);

module.exports = router;