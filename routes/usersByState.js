var express = require("express");
var router = express.Router();

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// console.log(db.get("users").value());
/* GET users listing. */
router.get("/:state", function (req, res, next) {
  db.read();
  res.send(
    db
      .get("users")
      .filter({ state: `${req.params.state}` })
      .value()
  );
  console.log(req.params.state);
  //   console.log(db.get("users").find({ state: "SC" }).value());
});

module.exports = router;
