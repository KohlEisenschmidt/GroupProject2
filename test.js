
var orm = require("./config/orm.js");

orm.all("profiles", function(res) {
    // cb(res);
    console.log(res);
  });