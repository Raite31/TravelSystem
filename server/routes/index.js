var express = require("express");
const conn = require("../public/javascripts/conn_sql");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/check", function (req, res) {
  const sql = "SELECT * FROM user";
  conn.query(sql, function (err, result) {
    if (err) {
      console.log("查询语句执行异常");
    }
    res.send(result);
  });
});

module.exports = router;
