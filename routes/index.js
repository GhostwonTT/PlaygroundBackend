var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/manuals/:filename', function (req, res, next) {
    var filename = req.params.filename;
    res.sendFile(path.resolve(__dirname + '/../public/manuals/' + filename + '.pdf'));
});

router.get('/manual_sec/:filename/:id', function (req, res, next) {
    var filename = req.params.filename;
    var id = req.params.id;
    res.sendFile(path.resolve(__dirname + '/../public/manuals/' + filename + '/' + id + '.pdf'));
})

module.exports = router;
