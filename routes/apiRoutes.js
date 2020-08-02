const express = require("express");
const router = express.Router();
const getLanguages = require("../controllers/indexController").getLanguages;

router.get("/", getLanguages);

module.exports = router;
