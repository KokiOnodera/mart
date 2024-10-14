var express = require('express');
var router = express.Router();

/* GET user listing. */
router.get('/', function(req, res, next) {
  res.json({ user_name: 'テストユーザー01' });
});

module.exports = router;