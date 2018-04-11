
var orm = require("./config/orm.js");

orm.all("profiles", function(res) {
    // cb(res);
    console.log(res);
  });

orm.activity("run", function(res) {
    // cb(res);
    console.log(res);
    });

orm.area("North", function(res) {
    // cb(res);
    console.log(res);
    });

orm.intensity("strenuous", function(res) {
    // cb(res);
    console.log(res);
    });

orm.match("walk", "North", "moderate", function(res) {
    // cb(res);
    console.log(res);
    });
