// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Profile = require("../models/profiles.js");
var db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {


  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {
    // Take the request...
    console.log("app.post/api/new");
    var newProfile = req.body;
    console.log(newProfile);
    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var personName = newProfile.person_name.replace(/\s+/g, "").toLowerCase();
    console.log("name ", personName);
    // Then add the newProile to the database using sequelize
    db.Profile.create({
      person_name: personName,
      gender: newProfile.gender,
      activity: newProfile.activity,
      area: newProfile.area,
      intensity: newProfile.intensity,
      image: newProfile.image,
      
      
    });
  });
};
//  event.preventDefault();