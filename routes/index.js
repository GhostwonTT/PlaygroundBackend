var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/manuals/:filename', function (req, res, next) {
    var filename = req.params.filename;
    res.sendFile(path.resolve('../public/manuals/' + filename + '.pdf'));
});

module.exports = router;
