
var express = require('express');
var router = express.Router();
const successCode = require('./constant/successCode');
const errorCode = require('./constant/errorCode');

/* GET logout listing. */
router.get('/', function(req, res) {
  delete req.session.user[0];
  delete req.session.authenticated;
  if(!req.session.user[0] && !req.session.authenticated) {
    res.status(200).json({
      code : successCode.LOGOUT_SUCCESS,
      status : 'OK',
      message: 'ログアウトしました。' 
    });
  } else {
    res.status(500).json({
      code : errorCode.LOGOUT_FAILED,
      status : 'failed',
      message: 'ログアウトに失敗しました。' 
    });
  }
});

module.exports = router;