var express = require("express");
const conn = require("../public/connectDB/conn_sql");
var router = express.Router();

// const app = express();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// ============================================== 景点api
router.post("/front/api/destination/getDestinationPage", function(req, res) {
  const sql = "SELECT * FROM destination";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(getDestinationPage查询语句执行异常);
    }
    res.send(result);
  });
});

// ============================================== 博客api
// =======================获取博客列表
router.post("/front/api/blog/getBlogPage", function(req, res) {
  const sql = "SELECT * FROM blog";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("getBlogPage查询语句执行异常");
    }
    res.send(result);
  });
});


// =============================================== 用户api
router.get("/front/api/check", function(req, res) {
  const sql = "SELECT * FROM user";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("查询语句执行异常");
    }
    res.send(result);
  });
});

module.exports = router;
