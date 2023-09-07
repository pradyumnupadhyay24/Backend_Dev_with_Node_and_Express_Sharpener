const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home-controller");

router.get("/", homeController.getHome);

router.post("/add", homeController.addData);

router.get("/get-data", homeController.getData);

router.delete("/delete-data/:id", homeController.deleteData);

module.exports = router;