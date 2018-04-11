// Dependencies
// =============================================================

// DataTypes (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");
module.exports = function(sequelize, DataTypes) {
  // Creates a "Character" model that matches up with DB
  var Profile = sequelize.define(
    "profile",
    {
      // the routeName gets saved as a string
      person_name: DataTypes.STRING,
      // the name of the character (a string)
      gender: DataTypes.STRING,
      // the character's role (a string)
      activity: DataTypes.STRING,
      // the character's age (a string)
      area: DataTypes.STRING,
      // and the character's force points (an int)
      intensity: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );

  // Syncs with DB
  // Profile.sync();

  // // Makes the Character Model available for other files (will also create a table)
  // module.exports = Profile;

  return Profile;
};
