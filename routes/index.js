var express = require('express');
var router = express.Router();
var inc = require("../db");
var fs = require("fs");
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(fs.readFileSync(path.join(__dirname, "../db/counter")));
});

router.post("/", function(req, res, next) {
	inc();
	res.send(fs.readFileSync(path.join(__dirname, "../db/counter")));
});

module.exports = router;
