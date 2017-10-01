var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/manuals/info', function (req, res, next) {
    res.send(buildInfoObject());
})

router.get('/manuals/:filename', function (req, res, next) {
    var filename = req.params.filename;
    res.sendFile(path.resolve(__dirname + '/../public/manuals/' + filename + '.pdf'));
});

router.get('/manuals/:filename/:id', function (req, res, next) {
    var filename = req.params.filename;
    var id = req.params.id;
    res.sendFile(path.resolve(__dirname + '/../public/manuals/' + filename + '/' + id + '.pdf'));
})

function buildInfoObject() {
    var info = {};
    info['Playground Starter'] = {'chapters' : ['Introduction', 'Welcome']};
    return JSON.stringify(info);
}

module.exports = router;
