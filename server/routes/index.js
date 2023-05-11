var express = require("express");
var bodyParser = require("body-parser");
const conn = require("../public/connectDB/conn_sql");
var router = express.Router();

// const app = express();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// 检验登录
router.post("/front/api/checkLogin", function (req, res) {
  const login = req.body;
  const sql = "SELECT * FROM user WHERE account = ? ";
  const sql2 = "INSERT INTO user(account,password) values(?,?)";
  conn.query(sql, login.account, function (err, result) {
    if (err) {
      console.log("checkLogin查询语句执行异常");
    }
    if (!result.length) {
      let id2 = null;

      function f() {
        return new Promise(function (resolve, reject) {
          conn.query(
            sql2,
            [login.account, login.password],
            function (err, rows) {
              if (err) {
                console.log("checkLogin插入语句执行异常");
              }
              resolve(rows.insertId);
            }
          );
        });
      }

      f().then(function (res) {
        id2 = res;
        console.log("id2: " + id2);
      });

      // setTimeout(() => console.log(id2), 3000);

      setTimeout(function () {
        const token = {
          login: true,
          account: login.account,
          password: login.password,
          id: id2,
        };

        return res.json({
          status: 1,
          msg: "注册成功",
          token: token,
        });
      }, 1500);
      return;
    } else {
      if (result[0].password == login.password) {
        let token = {
          login: true,
          account: login.account,
          password: login.password,
          id: result[0].id,
        };
        return res.json({
          status: 1,
          msg: "登录成功",
          token: token,
        });
      }
      return res.json({
        status: -2,
        msg: "密码错误",
      });
    }
    res.send(result);
  });
});
// =========================================================================================================== 购物车api
// 清除购物车
router.delete("/front/api/cart/deleteCart", function (req, res) {
  const uid = req.query.uid.toString();
  const settlementList = req.query.id;
  const sql = `DELETE FROM cart WHERE uid = "${uid}" AND id IN (${settlementList.join(
    ","
  )})`;
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      console.log("deleteCart查询语句执行异常");
    } else {
      result.code = 200;
    }
    res.send(result);
  });
});
// 获取购物车列表
router.post("/front/api/cart/getCartList", function (req, res) {
  const id = req.body.id;
  const sql = "SELECT * FROM cart where uid = ?";
  conn.query(sql, id, function (err, result) {
    if (err) {
      console.log("getCartList查询语句执行异常");
    }
    for (const item of result) {
      item.information = (item.information || "").split('"');
      item.information = item.information.filter((item) => item != "[");
      item.information = item.information.filter((item) => item != "]");
      item.information = item.information.filter((item) => item != ",");

      item.cov = (item.cov || "").split("'");
      item.cov = item.cov.filter((item) => item != "[");
      item.cov = item.cov.filter((item) => item != "]");
      item.cov = item.cov.filter((item) => item != ",");
    }

    res.send(result);
  });
});
// 加入购物车
router.post("/front/api/cart/addCart", function (req, res) {
  const data = req.body;
  console.log("uid: ", data.uid);
  const values = [
    data.id,
    data.uid,
    data.photo,
    data.title,
    data.price,
    2,
    data.tags,
    data.introduce,
    data.date_time,
    data.adults_num,
    data.children_num,
    data.infants_num,
    "2022-01-03",
  ];
  const sql =
    'INSERT INTO cart(dId,uid,cov,title,price,time,information,introduce,date_time,adults_num,children_num,infants_num,create_time) VALUES (?,?,"[?]",?,?,?,"?",?,?,?,?,?,?) ';
  conn.query(sql, values, function (err, result) {
    if (err) {
      console.log("addCart查询语句执行异常");
    }
    console.log(err);
    res.send(result.insertId.toString());
  });
});

// =========================================================================================================== 景点api
// 获取详情
router.post("/front/api/destination/getDestinationDetail", function (req, res) {
  const id = "" || req.body.id;
  const sql = "SELECT * FROM destination WHERE id = ?";
  conn.query(sql, id, function (err, result) {
    if (err) {
      console.log("getDestinationPage 详情查询语句执行异常");
    }
    for (const item of result) {
      item.photo = (item.photo || "").split('"');
      item.photo = item.photo.filter((item) => item != "[");
      item.photo = item.photo.filter((item) => item != "]");
      item.photo = item.photo.filter((item) => item != ",");

      item.precautions = (item.precautions || "").split('"');
      item.precautions = item.precautions.filter((item) => item != "[");
      item.precautions = item.precautions.filter((item) => item != "]");
      item.precautions = item.precautions.filter((item) => item != ",");

      item.tags = (item.tags || "").split('"');
      item.tags = item.tags.filter((item) => item != "[");
      item.tags = item.tags.filter((item) => item != "]");
      item.tags = item.tags.filter((item) => item != ",");

      item.accessibility = (item.accessibility || "").split('"');
      item.accessibility = item.accessibility.filter((item) => item != "[");
      item.accessibility = item.accessibility.filter((item) => item != "]");
      item.accessibility = item.accessibility.filter((item) => item != ",");

      item.addn_info = (item.addn_info || "").split('"');
      item.addn_info = item.addn_info.filter((item) => item != "[");
      item.addn_info = item.addn_info.filter((item) => item != "]");
      item.addn_info = item.addn_info.filter((item) => item != ",");

      item.departure_and_return = (item.departure_and_return || "").split('"');
      item.departure_and_return = item.departure_and_return.filter(
        (item) => item != "["
      );
      item.departure_and_return = item.departure_and_return.filter(
        (item) => item != "]"
      );
      item.departure_and_return = item.departure_and_return.filter(
        (item) => item != ","
      );
    }

    res.send(result);
  });
});

// 获取总的
router.post("/front/api/destination/getDestinationPage", function (req, res) {
  const keywordFlag = req.body.keyword;
  const keyword = ["%" + req.body.keyword + "%"];
  const sql2 = "SELECT * FROM destination";
  const sql3 = "SELECT * FROM destination WHERE title LIKE ?";

  if (keywordFlag != undefined) {
    conn.query(sql3, keyword, function (err, result) {
      if (err) {
        console.log("getDestinationPage 搜索查询语句执行异常");
      } else {
        for (const item of result) {
          item.photo = (item.photo || "").split('"');
          item.photo = item.photo.filter((item) => item != "[");
          item.photo = item.photo.filter((item) => item != "]");
          item.photo = item.photo.filter((item) => item != ",");

          item.precautions = (item.precautions || "").split('"');
          item.precautions = item.precautions.filter((item) => item != "[");
          item.precautions = item.precautions.filter((item) => item != "]");
          item.precautions = item.precautions.filter((item) => item != ",");

          item.tags = (item.tags || "").split('"');
          item.tags = item.tags.filter((item) => item != "[");
          item.tags = item.tags.filter((item) => item != "]");
          item.tags = item.tags.filter((item) => item != ",");
        }
        result.code = 200;
      }
      res.send(result);
    });
  } else {
    conn.query(sql2, function (err, result) {
      if (err) {
        console.log("getDestinationPage查询语句执行异常");
      } else {
        for (const item of result) {
          item.photo = (item.photo || "").split('"');
          item.photo = item.photo.filter((item) => item != "[");
          item.photo = item.photo.filter((item) => item != "]");
          item.photo = item.photo.filter((item) => item != ",");

          item.precautions = (item.precautions || "").split('"');
          item.precautions = item.precautions.filter((item) => item != "[");
          item.precautions = item.precautions.filter((item) => item != "]");
          item.precautions = item.precautions.filter((item) => item != ",");

          item.tags = (item.tags || "").split('"');
          item.tags = item.tags.filter((item) => item != "[");
          item.tags = item.tags.filter((item) => item != "]");
          item.tags = item.tags.filter((item) => item != ",");
        }
        result.code = 200;
      }
      res.send(result);
    });
  }
});
// 获取分类为hots的
router.post("/front/api/destination/getDestinationHots", function (req, res) {
  const id = "" || req.body.id;
  const sql = "SELECT * FROM destination WHERE id = ?";
  const sql2 = "SELECT * FROM destination where classify = 'hots'";
  if (id) {
    conn.query(sql, id, function (err, result) {
      if (err) {
        console.log("getDestinationPage hots查询语句执行异常");
      }
      for (const item of result) {
        item.photo = (item.photo || "").split('"');
        item.photo = item.photo.filter((item) => item != "[");
        item.photo = item.photo.filter((item) => item != "]");
        item.photo = item.photo.filter((item) => item != ",");

        item.precautions = (item.precautions || "").split('"');
        item.precautions = item.precautions.filter((item) => item != "[");
        item.precautions = item.precautions.filter((item) => item != "]");
        item.precautions = item.precautions.filter((item) => item != ",");

        item.tags = (item.tags || "").split('"');
        item.tags = item.tags.filter((item) => item != "[");
        item.tags = item.tags.filter((item) => item != "]");
        item.tags = item.tags.filter((item) => item != ",");
      }

      res.send(result);
    });
  } else {
    conn.query(sql2, function (err, result) {
      if (err) {
        console.log("getDestinationPage查询语句执行异常");
      }
      for (const item of result) {
        item.photo = (item.photo || "").split('"');
        item.photo = item.photo.filter((item) => item != "[");
        item.photo = item.photo.filter((item) => item != "]");
        item.photo = item.photo.filter((item) => item != ",");

        item.precautions = (item.precautions || "").split('"');
        item.precautions = item.precautions.filter((item) => item != "[");
        item.precautions = item.precautions.filter((item) => item != "]");
        item.precautions = item.precautions.filter((item) => item != ",");

        item.tags = (item.tags || "").split('"');
        item.tags = item.tags.filter((item) => item != "[");
        item.tags = item.tags.filter((item) => item != "]");
        item.tags = item.tags.filter((item) => item != ",");
      }

      res.send(result);
    });
  }
});
// 获取分类为recommend的
router.post(
  "/front/api/destination/getDestinationRecommend",
  function (req, res) {
    const id = "" || req.body.id;
    const sql = "SELECT * FROM destination WHERE id = ?";
    const sql2 = "SELECT * FROM destination  where classify = 'recommend'";
    if (id) {
      conn.query(sql, id, function (err, result) {
        if (err) {
          console.log("getDestinationPage recommend查询语句执行异常");
        }
        for (const item of result) {
          item.photo = (item.photo || "").split('"');
          item.photo = item.photo.filter((item) => item != "[");
          item.photo = item.photo.filter((item) => item != "]");
          item.photo = item.photo.filter((item) => item != ",");

          item.precautions = (item.precautions || "").split('"');
          item.precautions = item.precautions.filter((item) => item != "[");
          item.precautions = item.precautions.filter((item) => item != "]");
          item.precautions = item.precautions.filter((item) => item != ",");

          item.tags = (item.tags || "").split('"');
          item.tags = item.tags.filter((item) => item != "[");
          item.tags = item.tags.filter((item) => item != "]");
          item.tags = item.tags.filter((item) => item != ",");
        }

        res.send(result);
      });
    } else {
      conn.query(sql2, function (err, result) {
        if (err) {
          console.log("getDestinationPage查询语句执行异常");
        }
        for (const item of result) {
          item.photo = (item.photo || "").split('"');
          item.photo = item.photo.filter((item) => item != "[");
          item.photo = item.photo.filter((item) => item != "]");
          item.photo = item.photo.filter((item) => item != ",");

          item.precautions = (item.precautions || "").split('"');
          item.precautions = item.precautions.filter((item) => item != "[");
          item.precautions = item.precautions.filter((item) => item != "]");
          item.precautions = item.precautions.filter((item) => item != ",");

          item.tags = (item.tags || "").split('"');
          item.tags = item.tags.filter((item) => item != "[");
          item.tags = item.tags.filter((item) => item != "]");
          item.tags = item.tags.filter((item) => item != ",");
        }

        res.send(result);
      });
    }
  }
);
// 获取分类为lowPrice的
router.post(
  "/front/api/destination/getDestinationLowPrice",
  function (req, res) {
    const id = "" || req.body.id;
    const sql = "SELECT * FROM destination WHERE id = ?";
    const sql2 = "SELECT * FROM destination  where classify = 'lowPrice'";
    if (id) {
      conn.query(sql, id, function (err, result) {
        if (err) {
          console.log("getDestinationPage lowPrice查询语句执行异常");
        }
        for (const item of result) {
          item.photo = (item.photo || "").split('"');
          item.photo = item.photo.filter((item) => item != "[");
          item.photo = item.photo.filter((item) => item != "]");
          item.photo = item.photo.filter((item) => item != ",");

          item.precautions = (item.precautions || "").split('"');
          item.precautions = item.precautions.filter((item) => item != "[");
          item.precautions = item.precautions.filter((item) => item != "]");
          item.precautions = item.precautions.filter((item) => item != ",");

          item.tags = (item.tags || "").split('"');
          item.tags = item.tags.filter((item) => item != "[");
          item.tags = item.tags.filter((item) => item != "]");
          item.tags = item.tags.filter((item) => item != ",");
        }

        res.send(result);
      });
    } else {
      conn.query(sql2, function (err, result) {
        if (err) {
          console.log("getDestinationPage查询语句执行异常");
        }
        for (const item of result) {
          item.photo = (item.photo || "").split('"');
          item.photo = item.photo.filter((item) => item != "[");
          item.photo = item.photo.filter((item) => item != "]");
          item.photo = item.photo.filter((item) => item != ",");

          item.precautions = (item.precautions || "").split('"');
          item.precautions = item.precautions.filter((item) => item != "[");
          item.precautions = item.precautions.filter((item) => item != "]");
          item.precautions = item.precautions.filter((item) => item != ",");

          item.tags = (item.tags || "").split('"');
          item.tags = item.tags.filter((item) => item != "[");
          item.tags = item.tags.filter((item) => item != "]");
          item.tags = item.tags.filter((item) => item != ",");
        }

        res.send(result);
      });
    }
  }
);

// =========================================================================================================== 博客api
// 新增博客
router.post("/front/api/blog/createBlog", function (req, res) {
  const data = req.body;
  console.log(data);
  const values = [
    data.uid,
    data.title,
    data.cov,
    data.detail,
    data.introduce,
    data.tags,
    data.classify,
    "2022-03-01 13:18",
  ];
  const sql =
    'INSERT INTO blog(userId,title,photo,contain,introduce,tags,classify,create_time) VALUES (?,?,?,?,?,"?","?",?) ';
  conn.query(sql, values, function (err, result) {
    if (err) {
      console.log("createBlog查询语句执行异常");
      console.log("err: ", err);
    }
    res.send(result.insertId.toString());
  });
});
// 获取全部博客列表
router.post("/front/api/blog/getBlogPage", function (req, res) {
  const id = req.body.userId;
  console.log("id: ", id);
  const sql = "SELECT * FROM blog WHERE userId = ?";
  const sql1 = "SELECT * FROM blog";
  if (id) {
    conn.query(sql, id, function (err, result) {
      if (err) {
        console.log("getBlogPage查询语句执行异常");
        console.log("error: " + err);
      }
      for (const item of result) {
        item.photo = (item.photo || "").split('"');
        item.photo = item.photo.filter((item) => item != "[");
        item.photo = item.photo.filter((item) => item != "]");
        item.photo = item.photo.filter((item) => item != ",");

        item.tags = (item.tags || "").split('"');
        item.tags = item.tags.filter((item) => item != "[");
        item.tags = item.tags.filter((item) => item != "]");
        item.tags = item.tags.filter((item) => item != ",");
      }
      res.send(result);
    });
  } else {
    conn.query(sql1, function (err, result) {
      if (err) {
        console.log("getBlogPage查询语句执行异常");
        console.log("error: " + err);
      }
      for (const item of result) {
        item.photo = (item.photo || "").split('"');
        item.photo = item.photo.filter((item) => item != "[");
        item.photo = item.photo.filter((item) => item != "]");
        item.photo = item.photo.filter((item) => item != ",");

        item.tags = (item.tags || "").split('"');
        item.tags = item.tags.filter((item) => item != "[");
        item.tags = item.tags.filter((item) => item != "]");
        item.tags = item.tags.filter((item) => item != ",");
      }
      res.send(result);
    });
  }
});
// 获取博客详情
router.post("/front/api/blog/getBlogDetail", function (req, res) {
  const id = req.body.id;
  console.log(id);
  const sql = "SELECT * FROM blog WHERE id = ?";
  conn.query(sql, id, function (err, result) {
    if (err) {
      console.log("getBlogPage查询语句执行异常");
    }
    for (const item of result) {
      item.photo = (item.photo || "").split('"');
      item.photo = item.photo.filter((item) => item != "[");
      item.photo = item.photo.filter((item) => item != "]");
      item.photo = item.photo.filter((item) => item != ",");

      item.tags = (item.tags || "").split('"');
      item.tags = item.tags.filter((item) => item != "[");
      item.tags = item.tags.filter((item) => item != "]");
      item.tags = item.tags.filter((item) => item != ",");
    }
    res.send(result);
  });
});
// 作者主页的博客列表
router.post("/front/api/blog/authorBlogPage", function (req, res) {
  const sql = "SELECT * FROM blog WHERE userId = 1";
  conn.query(sql, function (err, result) {
    if (err) {
      console.log("getBlogPage查询语句执行异常");
    }
    for (const item of result) {
      item.photo = (item.photo || "").split('"');
      item.photo = item.photo.filter((item) => item != "[");
      item.photo = item.photo.filter((item) => item != "]");
      item.photo = item.photo.filter((item) => item != ",");

      item.tags = (item.tags || "").split('"');
      item.tags = item.tags.filter((item) => item != "[");
      item.tags = item.tags.filter((item) => item != "]");
      item.tags = item.tags.filter((item) => item != ",");
    }
    res.send(result);
  });
});

// =========================================================================================================== 用户api
// 搜索用户
router.post("/front/api/getAuthor", function (req, res) {
  const id = req.body.id;
  const sql = "SELECT * FROM user WHERE id = ?";
  conn.query(sql, id, function (err, result) {
    if (err) {
      console.log("getAuthor查询语句执行异常");
      console.log("err: " + err);
    }
    for (const item of result) {
      item.tags = (item.tags || "").split('"');
      item.tags = item.tags.filter((item) => item != "[");
      item.tags = item.tags.filter((item) => item != "]");
      item.tags = item.tags.filter((item) => item != ",");
    }
    for (const item of result) {
      item.place = (item.place || "").split('"');
      item.place = item.place.filter((item) => item != "[");
      item.place = item.place.filter((item) => item != "]");
      item.place = item.place.filter((item) => item != ",");
    }
    res.send(result);
  });
});

// 更新用户信息
router.post("/front/api/updateAuthor", function (req, res) {
  const user = req.body;
  user.place = req.body.place.toString();
  user.tags = req.body.tags.toString();

  const sql =
    "UPDATE user SET avatar=?,name=?,sex=?,introduce=?,place=?,birthday=?,tags=?,account=?,password=? WHERE id=?";
  conn.query(
    sql,
    [
      user.avatar,
      user.name,
      user.sex,
      user.introduce,
      user.place,
      user.birthday,
      user.tags,
      user.account,
      user.password,
      user.id,
    ],
    function (err, result) {
      if (err) {
        console.log("updateAuthor查询语句执行异常");
      }
      return res.json({
        status: 1,
        msg: "更新成功",
      });
      res.send(result);
    }
  );
});
// =========================================================================================================== 订单api
// 返回所有订单
router.post("/front/api/order/getOrder", function (req, res) {
  const id = req.body.id;
  const sql = "SELECT * FROM orders WHERE uid = ?";
  conn.query(sql, id, function (err, result) {
    if (err) {
      console.log("err: ", err);
      console.log("getOrder查询语句执行异常");
    }
    res.send(result);
  });
});

module.exports = router;
