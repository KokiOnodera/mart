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

  var message = "";
  const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  
  if(!req.query.user.tel) {
    message = '電話番号は必須です';
  }
  if (!req.query.user.address) {
    message= '住所は必須です';
  }
  const pass = req.query.user.pass;
  if(pass.length < 5) {
    message= 'パスワードは4文字以上必要です';
  }
  if(!regex.test(req.query.user.mail)) {
    message = 'メールアドレスが正しくありません';
  }
  if (!req.query.user.name) {
    message = '名前は必須です';
  }

  if(message !== "") {
    res.status(200).json({
      status: 'failed',
      message : message
    });
  } else {
    const sql = "SELECT * FROM user WHERE mail_address=?"
    connection.query(sql, 
      req.query.user.mail, (err, rows, fields) => {
      if (err) {
          console.log(err.message);
          res.status(500).json({
              status: 'failed',
          })
      } else {
        if(rows.length === 0) {
          res.status(200).json({
            status: 'OK',
            message : ""
          });
        } else {
          console.log(rows);
          res.status(200).json({
            status : 'failed',
            message: 'メールアドレスは使われています。' 
          });
        }
      }
    })
  }

});

module.exports = router;