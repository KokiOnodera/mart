var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mart'
});

/* GET user listing. */
router.get('/', function(req, res, next) {
  if (req.session.authenticated) {
    res.json({ loginData: req.session.user[0]});
  } 
});

module.exports = router;