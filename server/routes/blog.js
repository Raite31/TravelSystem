var express = require("express");
const conn = require("../public/connectDB/conn_sql");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});



module.exports = router;
