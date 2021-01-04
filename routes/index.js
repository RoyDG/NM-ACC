const express = require('express');
const router = express.Router();
const middleware = require('../middlewares/middlewares')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'this is root url'})
});

//another route
router.get('/userinfo', middleware.first, middleware.second, middleware.third)

module.exports = router;
