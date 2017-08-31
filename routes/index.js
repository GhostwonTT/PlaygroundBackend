var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/manuals/starter', function(req, res, next) {
    res.sendFile(path.resolve('../public/manuals/starter_kit.pdf'));
})
module.exports = router;
