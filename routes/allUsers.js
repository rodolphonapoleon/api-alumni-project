var express = require("express");
var router = express.Router();

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// console.log(db.get("users").value());
/* GET users listing. */
router.get("/", function (req, res, next) {
  db.read();
  res.send(db.get("users").value());
  console.log(db.get("users").value());
});

module.exports = router;
