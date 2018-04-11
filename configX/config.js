// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("WBR_db", "root", "Kohlieo86", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;






// // Object for all our SQL statement functions.
// var orm = {
//     all: function(tableInput, cb) {
//       var queryString = "SELECT * FROM " + tableInput + ";";
//       connection.query(queryString, function(err, result) {
//         if (err) {
//           throw err;
//         }
//         cb(result);
//       });
//     },
//     create: function(table, cols, vals, cb) {
//       var queryString = "INSERT INTO " + table;
  
//       queryString += " (";
//       queryString += cols.toString();
//       queryString += ") ";
//       queryString += "VALUES (";
//       queryString += printQuestionMarks(vals.length);
//       queryString += ") ";
  
//       console.log(queryString);
  
//       connection.query(queryString, vals, function(err, result) {
//         if (err) {
//           throw err;
//         }
  
//         cb(result);
//       });
//     },
//     // An example of objColVals would be {name: panther, sleepy: true}
//     update: function(table, objColVals, condition, cb) {
//       var queryString = "UPDATE " + table;
  
//       queryString += " SET ";
//       queryString += objToSql(objColVals);
//       queryString += " WHERE ";
//       queryString += condition;
  
//       console.log(queryString);
//       connection.query(queryString, function(err, result) {
//         if (err) {
//           throw err;
//         }
  
//         cb(result);
//       });
//     },
//     delete: function(table, condition, cb) {
//       var queryString = "DELETE FROM " + table;
//       queryString += " WHERE ";
//       queryString += condition;
  
//       connection.query(queryString, function(err, result) {
//         if (err) {
//           throw err;
//         }
//         cb(result);
//       });
//     }
//   };
//   // Export the orm object for the model (cat.js).
//   module.exports = orm;
  