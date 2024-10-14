var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mart'
});

/* GET signup listing. */
router.get('/', function(req, res) {
  const sql = 'INSERT INTO user (user_name, mail_address, password, address, tel) VALUES (?, ?, ?, ?, ?)'
  connection.query(sql, 
    [req.query.userInfo.name,
    req.query.userInfo.mail, 
    req.query.userInfo.pass,
    req.query.userInfo.address,
    req.query.userInfo.tel], (err, rows, fields) => {
    if (err) {
        console.log(err.message);
        res.status(500).json({
            status: 'failed',
        })
    } else {
        res.status(200).json({
            status: 'success',
        })
    }
  })
});

module.exports = router;