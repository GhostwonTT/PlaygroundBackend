var express = require('express');
var router = express.Router();

router.get('/projectList', function (req, res, next) {
    res.send(buildSampleProject());
});

function buildSampleProject() {
    var obj = JSON.parse(
        `{
        "ProjectList": [
            { "id":"0",
                "name":"Go Play Project",
                "location":"Thailand",
                "requireFunding":true,
                "seekingVolunteers":false,
                "description":"The Thai/Burma border “Go Play Project” was the origin of what is now Playground Ideas. Over the course of two years, a team of volunteers and builders constructed 40 playgrounds at schools and community centers, led by Playground Ideas founder and CEO, Marcus Veerman. Seventy percent was locally funded by the schools and NGOs we worked with. The remainder was funded by private philanthropists  in Australia.",
                "creatorId":"platypus",
                "numberOfDonations":"1000",
                "startDate":"10-10-2017",
                "endDate":"10-10-2018",
                "manuallyAddingFundsAllowed":false,
                "facebook_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                "image_link":"https://playgroundideas.org/wp-content/uploads/2017/02/DSC00275.jpg",
                "MonetaryAmount":"20000",
                "MonetaryAmount":"50000"
            },
    
            { "id":"1",
                "name":"Go Play Project",
                "location":"Australia",
                "requireFunding":true,
                "seekingVolunteers":false,
                "description":"The Thai/Burma border “Go Play Project” was the origin of what is now Playground Ideas. Over the course of two years, a team of volunteers and builders constructed 40 playgrounds at schools and community centers, led by Playground Ideas founder and CEO, Marcus Veerman. Seventy percent was locally funded by the schools and NGOs we worked with. The remainder was funded by private philanthropists  in Australia.",
                "creatorId":"platypus",
                "numberOfDonations":"1000",
                "startDate":"01-10-2017",
                "endDate":"12-10-2018",
                "manuallyAddingFundsAllowed":false,
                "facebook_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                "image_link":"https://playgroundideas.org/wp-content/uploads/2017/02/DSC00764.jpg",
                "MonetaryAmount":"20000",
                "MonetaryAmount":"50000"
            },
            { "id":"2",
                "name":"Go Play Project",
                "location":"China",
                "requireFunding":true,
                "seekingVolunteers":false,
                "description":"The Thai/Burma border “Go Play Project” was the origin of what is now Playground Ideas. Over the course of two years, a team of volunteers and builders constructed 40 playgrounds at schools and community centers, led by Playground Ideas founder and CEO, Marcus Veerman. Seventy percent was locally funded by the schools and NGOs we worked with. The remainder was funded by private philanthropists  in Australia.",
                "creatorId":"platypus",
                "numberOfDonations":"1000",
                "startDate":"10-10-2016",
                "endDate":"10-10-2019",
                "manuallyAddingFundsAllowed":false,
                "facebook_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                "image_link":"https://playgroundideas.org/wp-content/uploads/2017/02/DSC01350.jpg",
                "MonetaryAmount":"20000",
                "MonetaryAmount":"50000"
            }
        ]
    }`
    );
    return obj;
}

module.exports = router;