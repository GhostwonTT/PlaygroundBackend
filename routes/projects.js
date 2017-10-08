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
                    "projectPostStatus":{
                        "description":"post"
                    },
                    "location":"Thailand",
                    "requiresFunding":true,
                    "seekingVolunteers":false,
                    "description":"The Thai/Burma border “Go Play Project” was the origin of what is now Playground Ideas. Over the course of two years, a team of volunteers and builders constructed 40 playgrounds at schools and community centers, led by Playground Ideas founder and CEO, Marcus Veerman. Seventy percent was locally funded by the schools and NGOs we worked with. The remainder was funded by private philanthropists  in Australia.",
                    "creatorId":"123",
                    "numberOfDonations":"1000",
                    "startDate":"10-10-2017",
                    "endDate":"10-10-2018",
                    "manuallyAddingFundsAllowed":false,
                    "facebook_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "twitter__campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "google_campaing_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "pinterest_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "linkedin_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "youtube_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "MonetaryAmount":"20000",
                    "MonetaryAmount":"50000",
                    "imagelink":"https://playgroundideas.org/wp-content/uploads/2017/02/DSC01350.jpg"
                    },
                    
                { "id":"1",
                    "name":"Good Project",
                    "projectPostStatus":{
                        "description":"post"
                    },
                    "location":"Australia",
                    "requireFunding":true,
                    "seekingVolunteers":false,
                    "description":"The Thai/Burma border “Go Play Project” was the origin of what is now Playground Ideas. Over the course of two years, a team of volunteers and builders constructed 40 playgrounds at schools and community centers, led by Playground Ideas founder and CEO, Marcus Veerman. Seventy percent was locally funded by the schools and NGOs we worked with. The remainder was funded by private philanthropists  in Australia.",
                    "creatorId":"123",
                    "numberOfDonations":"1000",
                    "startDate":"01-10-2017",
                    "endDate":"12-10-2018",
                    "manuallyAddingFundsAllowed":false,
                    "facebook_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "twitter__campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "google_campaing_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "pinterest_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "linkedin_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "youtube_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "MonetaryAmount":"20000",
                    "MonetaryAmount":"50000",
                    "imagelink":"https://playgroundideas.org/wp-content/uploads/2017/02/DSC00764.jpg"
                    },
        
                { "id":"2",
                    "name":"Have Fun",
                    "projectPostStatus":{
                        "description":"post"
                    },
                    "location":"China",
                    "requireFunding":true,
                    "seekingVolunteers":false,
                    "description":"The Thai/Burma border “Go Play Project” was the origin of what is now Playground Ideas. Over the course of two years, a team of volunteers and builders constructed 40 playgrounds at schools and community centers, led by Playground Ideas founder and CEO, Marcus Veerman. Seventy percent was locally funded by the schools and NGOs we worked with. The remainder was funded by private philanthropists  in Australia.",
                    "creatorId":"123",
                    "numberOfDonations":"1000",
                    "startDate":"10-10-2016",
                    "endDate":"10-10-2019",
                    "manuallyAddingFundsAllowed":false,
                    "facebook_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "twitter__campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "google_campaing_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "pinterest_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "linkedin_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "youtube_campaign_link":"https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fplaygroundideas.org%2Four-playground-projects%2Fgo-play-project-thailand%2F%23.Wdhw5V85vnc.facebook&picture=&title=Go+Play+Project+%28Thailand%29+%7C+Playground+Ideas&description=&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html",
                    "MonetaryAmount":"20000",
                    "MonetaryAmount":"50000",
                    "imagelink":"https://playgroundideas.org/wp-content/uploads/2017/02/DSC00275.jpg"
                    }
            ]
        }`
    );
    return obj;
}

module.exports = router;