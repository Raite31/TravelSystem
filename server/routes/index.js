var express = require("express");
var bodyParser = require("body-parser");
const conn = require("../public/connectDB/conn_sql");
var router = express.Router();

// const app = express();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// 检验登录
router.post("/front/api/checkLogin", function(req, res) {
  const login = req.body;
  const sql = "SELECT * FROM user WHERE account = ? ";
  const sql2 = "INSERT INTO user(account,password) values(?,?)";
  conn.query(sql, login.account, function(err, result) {
    if (err) {
      console.log("checkLogin查询语句执行异常");
    }
    if (!login.account || !login.password) {
      return res.json({
        status: -3,
        msg: "请输入账号密码"
      });
    }
    if (!result.length) {
      let id2 = null;

      function f() {
        return new Promise(function(resolve, reject) {
          conn.query(sql2, [login.account, login.password], function(err, rows) {
            if (err) {
              console.log("checkLogin插入语句执行异常");
            }
            resolve(rows.insertId);
          });
        });
      }

      f().then(function(res) {
        console.log(res);
        id2 = res;
      });

      // setTimeout(() => console.log(id2), 3000);

      setTimeout(function() {
        const token = {
          login: true,
          account: login.account,
          password: login.password,
          id: id2
        };

        return res.json({
          status: 1,
          msg: "注册成功",
          token: token
        });
      }, 1500);
      return;
    } else {
      if (result[0].password == login.password) {
        let token = {
          login: true,
          account: login.account,
          password: login.password,
          id: result[0].id
        };
        return res.json({
          status: 1,
          msg: "登录成功",
          token: token
        });
      }
      return res.json({
        status: -2,
        msg: "密码错误"
      });
    }
    res.send(result);
  });

  // const sql = "SELECT * FROM destination";
  // conn.query(sql, function(err, result) {
  //   if (err) {
  //     console.log("getDestinationPage查询语句执行异常");
  //   }
  //   res.send(result);
  // });
});

// =========================================================================================================== 景点api
// 获取总的
router.post("/front/api/destination/getDestinationPage", function(req, res) {
  const sql = "SELECT * FROM destination";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("getDestinationPage查询语句执行异常");
    }
    res.send(result);
  });
});
// 获取分类为hots的
router.post("/front/api/destination/getDestinationHots", function(req, res) {
  const sql = "SELECT * FROM destination where classify = 'hots'";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("getDestinationHots查询语句执行异常");
    }
    res.send(result);
  });
});
// 获取分类为recommend的
router.post("/front/api/destination/getDestinationRecommend", function(req, res) {
  const sql = "SELECT * FROM destination where classify = 'recommend'";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("getDestinationRecommend查询语句执行异常");
    }
    for (const item of result) {
      item.tags = item.tags.split("\"");
      item.tags = item.tags.filter((item) => item != "[");
      item.tags = item.tags.filter((item) => item != "]");
      item.tags = item.tags.filter((item) => item != ",");
    }
    res.send(result);
  });
});
// 获取分类为lowPrice的
router.post("/front/api/destination/getDestinationLowPrice", function(req, res) {
  const sql = "SELECT * FROM destination where classify = 'lowPrice'";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("getDestinationRecommend查询语句执行异常");
    }
    res.send(result);
  });
});

// =========================================================================================================== 博客api
// 获取全部博客列表
router.post("/front/api/blog/getBlogPage", function(req, res) {
  const sql = "SELECT * FROM blog";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("getBlogPage查询语句执行异常");
    }
    for (const item of result) {
      item.tags = item.tags.split("\"");
      item.tags = item.tags.filter((item) => item != "[");
      item.tags = item.tags.filter((item) => item != "]");
      item.tags = item.tags.filter((item) => item != ",");
    }
    res.send(result);
  });
});
// 作者主页的博客列表
router.post("/front/api/blog/authorBlogPage", function(req, res) {
  const sql = "SELECT * FROM blog WHERE userId = 1";
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("getBlogPage查询语句执行异常");
    }
    for (const item of result) {
      item.tags = item.tags.split("\"");
      item.tags = item.tags.filter((item) => item != "[");
      item.tags = item.tags.filter((item) => item != "]");
      item.tags = item.tags.filter((item) => item != ",");
    }
    res.send(result);
  });
});


// =========================================================================================================== 用户api
router.post("/front/api/getAuthor", function(req, res) {
  const id = req.body.id;
  const sql = "SELECT * FROM user WHERE id = ?";
  conn.query(sql, id, function(err, result) {
      if (err) {
        console.log("查询语句执行异常");
      }
      for (const item of result) {
        item.tags = item.tags.split("\"");
        item.tags = item.tags.filter((item) => item != "[");
        item.tags = item.tags.filter((item) => item != "]");
        item.tags = item.tags.filter((item) => item != ",");
      }
      console.log("result:", result);
      res.send(result);
    }
  )
  ;
});

// router.post("/front/api/updateAuthor", function(req, res) {
//   const user = req.body;
//   const sql = "UPDATE user SET avatar=?,name=?,sex=?,introduce=?,place=?,birthday=?,tags=?,account=?,password=?";
//   conn.query(sql, user.id, function(err, result) {
//       if (err) {
//         console.log("查询语句执行异常");
//       }
//       for (const item of result) {
//         item.tags = item.tags.split("\"");
//         item.tags = item.tags.filter((item) => item != "[");
//         item.tags = item.tags.filter((item) => item != "]");
//         item.tags = item.tags.filter((item) => item != ",");
//       }
//       res.send(result);
//     }
//   )
//   ;
// });


module.exports = router;
