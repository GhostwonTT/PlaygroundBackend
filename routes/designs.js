var express = require('express');
var router = express.Router();

router.get('/sample', function (req, res, next) {
    res.send(buildSampleDesign());
});

function buildSampleDesign() {
    var list = {};
    var sample = {};
    sample['id'] = '3063';
    sample['name'] = 'Scoop and Shaft';
    sample['creatorId'] = '68';
    sample['category'] = 'Groundlevel';
    sample['description'] = 'This play design may be added to cubbies for an extra element of fun as children uses the scoop to carry materials to the top of the cubby and pour it down the shaft at the top.';
    sample['materials'] = 'x 2 Timber, 335 cm / 11’ length, 15 cm / 6” diameter\n' +
        'x 1 Timber, 152.1 cm / 5’ length, 9 cm / 3.5” diameter\n' +
        'x 2 Timber, 118.1 cm / 3.9’ length, 9 cm / 3.5” diameter\n' +
        'x 2 Timber, 717 cm / 2.4’ length, 9 cm / 3.5” diameter\n' +
        'x 2 Timber, 717 cm / 2.4’ length, 5.4 cm / 2.1” diameter\n' +
        'Rope, 3.35 m / 11’ length\n' +
        'x 2 Steel Sheets, 75 cm / 29.5” length, 3.6 cm / 1.4” width\n' +
        'x 2 Steel Sheets, 54cm / 21.3” length, 4 cm / 1.6” width\n' +
        'x 2 Steel Sheets, 18 cm / 7” length, 4 cm / 1.6” width\n' +
        'x 1 PVC Pipe and Joint\n' +
        'x 14 Nails\n' +
        'x 10 Lag Bolt\n' +
        'x 2 Hex Bolts\n' +
        'x 14 Washers\n' +
        'x 2 Nuts\n' +
        'x 1 Motorcycle Tire\n' +
        'Cement\n' +
        'x 2 Pulley System Wheels\n' +
        'Paint and Brush (optional)';
    sample['tools'] = 'Shoveln\n' +
        'Utility Knife\n' +
        'Hammer\n' +
        'Drill and bit\n' +
        'Machete\n' +
        'Grinder\n' +
        'Welder';
    sample['picture'] = 'https://playgroundideas.org/wp-content/uploads/design_gallery/Scoop%20and%20Shaft-1024x671.jpg';
    list['3063'] = sample;
    return JSON.stringify(list);
}

module.exports = router;