var express = require("express");
var router = express.Router();
var { nanoid } = require("nanoid");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// Set some defaults
db.defaults({ users: [] }).write();

router.post("/", (req, res, next) => {
  const user = {
    id: nanoid(),
    name: req.body.name,
    dob: req.body.dob,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    phone: req.body.phone,
    streetaddress: req.body.streetaddress,
    state: req.body.state,
    citystatezip: req.body.citystatezip,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    avatar: req.body.avatar,
  };
  db.get("users").push(user).write();
  console.log(db.get("users").value());
  res.send(db.get("users").value());
});

module.exports = router;
