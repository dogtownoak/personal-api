var db = require('./models');

// var profile_descSeed = [
//     {
//     name: String,
//     githubUsername: String,
//     githubLink: String,
//     githubProfileImage: String,
//     personalSiteLink: String,
//     currentCity: String,
//     hobbies: [
//         {hobby: 'snowboarding', season: 'winter'}, 
//         {hobby: 'fly fishing', season: 'summer'}, {hobby: 'biking', season: 'summer'}]
//     }
// ];

var art_list = [
    {
        name: "Dogtown",
        description: "Test",
        img: "Test",
        position: "Test"
    }];

db.Art.deleteMany({}, function(err, art) {
    console.log('removed all art');
    db.Art.create(art_list, function(err, savedArt){
        if (err) {
            console.log(err);
            return;
        }
        console.log('recreated all art');
        console.log("create", art.length, "art pieces");
    });
});