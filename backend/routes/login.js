
var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mart'
});

/* GET signupValidete listing. */
router.get('/', function(req, res) {
  const sql = "SELECT * FROM user WHERE mail_address=? AND password=?"
  connection.query(sql, 
    [
      req.query.mail,
      req.query.pass
    ], (err, rows, fields) => {
    if (err) {
        console.log(err.message);
        res.status(500).json({
            status: 'failed',
            message: 'システムエラーが発生しました。' 
        })
    } else {
      if(rows.length !== 0) {
        req.session.authenticated = true;
        req.session.user = rows;
        res.status(200).json({
          status: 'OK',
          message : "ログインに成功しました。"
        });
      } else {
        res.status(200).json({
          status : 'failed',
          message: 'ログインに失敗しました。' 
        });
      }
    }
  })

});

module.exports = router;