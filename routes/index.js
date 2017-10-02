var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/manuals/info', function (req, res, next) {
    res.send(buildInfoObject());
});

router.get('/manuals/:filename', function (req, res, next) {
    var filename = req.params.filename;
    res.sendFile(path.resolve(__dirname + '/../public/manuals/' + filename + '.pdf'));
});

router.get('/manuals/:filename/:id', function (req, res, next) {
    var filename = req.params.filename;
    var id = req.params.id;
    res.sendFile(path.resolve(__dirname + '/../public/manuals/' + filename + '/' + id + '.pdf'));
});

router.get('/manuals/info', function (req, res, next) {
    res.send(buildInfoObject());
});

function buildInfoObject() {
    var info = {};
    info['Playground Starter'] = {'id' : '0',
        'chapters' : ['Welcome', 'Let\'s Build A Playground', 'Site Plan', 'Elements', 'Join Us']};

    info['Builder\'s Handbook'] = {'id' : '1',
        'chapters' : ['Introduction', 'Step 1: Listen', 'Step 2: Plan',
            'Step 3: Design', 'Step 4: Build', 'Step 5: Maintain', 'Appendices']};

    info['Safety Handbook'] = {'id' : '2',
        'chapters' : ['Managing', 'Hazards', 'Heights + Fall Zone']};

    info['Loose Parts Manual'] = {'id' : '3',
        'chapters' : ['Welcome', 'Benefits Of Loose Parts',
            'Step 1: Assess Your Environment',
            'Step 2: Gather Loose Parts Materials',
            'Step 3: Storage And Maintenance', 'Step 4: Train Staff',
            'Going Deeper', 'Thank You', 'Further Reading & Resources']};

    info['Inclusive Design Manual'] = {'id' : '4',
        'chapters' : ['Intro', 'Listen', 'Tips And Strategies', 'Design']};

    info['Cut & Paste'] = {'id' : '5',
        'chapters' : ['Cut & Paste Playground Designer']};

    info['Teacher Training'] = {'id' : '6',
        'chapters' : ['Welcome', 'The Transforming Power Of Play',
            'Why Do Children Play', 'What Does Play Look Like',
            'Obstacles To Play', 'Rote Based Learning Vs. Play Based Learning',
            'Be A Play Advocate', 'Keep Learning', 'References']};

    info['Case for Play'] = {'id' : '7',
        'chapters' : ['Executive Summary', 'Introduction', 'The Issue',
            'Potential Of Play Interventions', 'Call To Action', 'References']};
    return JSON.stringify(info);
}

module.exports = router;
