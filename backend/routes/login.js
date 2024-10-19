
var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const successCode = require('./constant/successCode');
const errorCode = require('./constant/errorCode');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mart'
});

/* GET login listing. */
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
            code : errorCode.SYSTEM_ERROR,
            status: 'failed',
            message: 'システムエラーが発生しました。' 
        })
    } else {
      if(rows.length !== 0) {
        req.session.authenticated = true;
        req.session.user = rows;
        res.status(200).json({
          code : successCode.LOGIN_SUCCESS,
          status: 'OK',
          message : "ログインに成功しました。",
          loginData : rows
        });
      } else {
        res.status(200).json({
          code : errorCode.LOGIN_FAILED,
          status : 'failed',
          message: 'ログインに失敗しました。' 
        });
      }
    }
  })

});

module.exports = router;