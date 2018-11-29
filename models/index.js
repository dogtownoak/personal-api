const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useMongoClient: true});

// const mongoose = require("mongoose");
// mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useMongoClient: true});

// module.exports.Profile = require("./profile.js");
module.exports.Art = require("./art.js");