const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CampgoundSchema = new Schema({
    title: String,
    price: String,
    descpription: String,
    location: String
})

module.exports = mongoose.model("Campground", CampgoundSchema);