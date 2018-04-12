var path = require('path');
// var server = require("/server.js");

module.exports = function(app){

    //html links
    //all areas page
    app.get("/allareas", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../public/allareas.html"));
    });
    //the main areas page
    app.get("/area", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../public/area.html"));
    });
    //contact page
    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../public/contact.html")); 
    });
    //east charlotte page
    app.get("/eastcharlotte", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../public/eastcharlotte.html"));
    });
    //homepage
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../public/index.html")); 
    });
    //north charlotte page
    app.get("/northcharlotte", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../public/northcharlotte.html")); 
    });
    //southend page
    app.get("/southend", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../public/southend.html"));
    });
    //survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../public/survey.html"));
    });
    //uptown page
    app.get("/uptown", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../public/uptown.html")); 
    });
    //west charlotte page
    app.get("/westcharlotte", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../public/westcharlotte.html"));
    });
    app.get("/matches", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../public/matches.html"));
    });
}