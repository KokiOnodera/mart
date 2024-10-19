var express = require('express');
var router = express.Router();

/* GET user listing. */
router.get('/', function(req, res) {
  if (req.session.authenticated) {
    res.json({ loginData: req.session.user[0]});
  } 
});

module.exports = router;