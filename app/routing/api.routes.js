// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Profile = require("../models/profiles.js");
var db = require("../../models");
var DataTypes= require("sequelize");
// Routes
// =============================================================
module.exports = function(app) {
  const Op = DataTypes.Op;
 

  // If a user sends data to add a new character...
  app.post("/api/exactmatch", function(req, res) {
    // Take the request...
    console.log("app.post/api/new");
    var newProfile = req.body;
    console.log(newProfile);
    // Create a routeName

    db.Profile.findAll({
      where: {
        activity: newProfile.activity,
        area: newProfile.area,
        intensity: newProfile.intensity
      }
    }).then(function(dbPost) {
      // res.json(dbPost);
      console.log("act matches ", dbPost);
      res.json(dbPost);
    });
  });

  app.post("/api/activityintensity", function(req, res) {
    // Take the request...
    console.log("app.post/api/new");
    var newProfile = req.body;
    console.log(newProfile);
    // Create a routeName

    db.Profile.findAll({
      // where: {
      //   activity: newProfile.activity,
      //   intensity: newProfile.intensity,
      //   [Op.notLike]: {area: newProfile.area}
      // }
      where: {
        activity: newProfile.activity,
        intensity: newProfile.intensity,
        area : {[Op.ne]: newProfile.area}
        //https://sequelize-guides.netlify.com/search-operators/
      }
    }).then(function(dbPost) {
      // res.json(dbPost);
      console.log("same activity same intensity ", dbPost);
      res.json(dbPost);
    });
  });

  app.post("/api/activityarea", function(req, res) {
    // Take the request...
    console.log("app.post/api/new");
    var newProfile = req.body;
    console.log(newProfile);
    // Create a routeName

    db.Profile.findAll({
      where: {
        activity: newProfile.activity,
        area: newProfile.area,
        intensity : {[Op.ne]: newProfile.intensity}
        //https://sequelize-guides.netlify.com/search-operators/
      }
    }).then(function(dbPost) {
      // res.json(dbPost);
      console.log("same activity same intensity ", dbPost);
      res.json(dbPost);
    });
  });


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
      image: newProfile.image
    }).then(function(dbPost) {
      // res.json(dbPost);
      console.log("createsuccess ", dbPost);
      res.json(dbPost);
    });
  });
};
//  event.preventDefault();
