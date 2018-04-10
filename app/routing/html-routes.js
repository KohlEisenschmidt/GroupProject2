var path = require('path');
// var server = require("/server.js");

module.exports = function(app){

    //html links
    
    //homepage
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../views/index.html")); 
    });
    //survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../views/survey.html"));
    });
}