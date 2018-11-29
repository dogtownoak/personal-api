const db = require('./models');

const express = require('express'),
    bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

// Profile: Hard Coded //

var profile_desc = [
    {
    name: "test",
    githubUsername: "test",
    githubLink: "test",
    githubProfileImage: "test",
    personalSiteLink: "test",
    currentCity: "test",
    hobbies: [
        {hobby: 'snowboarding', season: 'winter'}, 
        {hobby: 'fly fishing', season: 'summer'}, {hobby: 'biking', season: 'summer'}]
    }
];



////////////////////
//  ROUTES
///////////////////

// // define a root route: localhost:3000/
app.get('/', function (req, res) {
    res.sendFile('views/index.html' , { root : __dirname}); 
});

//////

app.get('/api/profile', function(req, res) {
    res.json(profile_desc);
});

app.get('/api/art', function(req, res) {
    db.Art.find({})
    .exec(function(err, art) {
        if(err) {console.log("index error: " + err)}
        res.json(art);
    });
});













app.listen(process.env.PORT || 3000, () => {
    console.log('Express server is up and running');
});