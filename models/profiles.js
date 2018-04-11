// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Profile = sequelize.define("profile", {
  // the routeName gets saved as a string
  person_name: Sequelize.STRING,
  // the name of the character (a string)
  gender: Sequelize.STRING,
  // the character's role (a string)
  activity: Sequelize.STRING,
  // the character's age (a string)
  area: Sequelize.STRING,
  // and the character's force points (an int)
  intensity: Sequelize.STRING
}, {
  timestamps: false
});

// Syncs with DB
Profile.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Profile;
