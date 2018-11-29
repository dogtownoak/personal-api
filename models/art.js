var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtSchema = new Schema({
    _id: String,
    name: String,
    description: String,
    img: String,
    position: String
})

var Art = mongoose.model('Art', ArtSchema);

module.exports = Art;