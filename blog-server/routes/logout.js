var express = require("express");
var router = express.Router();

const assert = require("assert");

// POST method route
router.post("/", function (req, res, next) {
  res.clearCookie("jwt");
  res.send({ msg: "Logged out", status: 200 });
});

module.exports = router;
