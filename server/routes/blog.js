var express = require("express");
const conn = require("../public/connectDB/conn_sql");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/front/api/getBlog", function(req, res) {
  const sql = "SELECT * FROM blog";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("查询语句执行异常");
    }
    res.send(result);
  });
});

module.exports = router;
