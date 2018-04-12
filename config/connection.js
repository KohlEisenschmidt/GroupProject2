// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection({
    port: process.env.JAWSDB_URL,
    user: "t7rq8zhowhjbm51t",
    password:"iesmmb5qwtsrihdw",
    database: "ip2dldoe2f6yvrp9",
    host: "l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"
  });
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kohlieo86",
    database: "WBR_db"
  })
}
// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "WBR_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
