var express = require("express");
var db = require("../db");
var router = express.Router();

/* token */
router.get("/", db.token);

module.exports = router;
