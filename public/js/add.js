// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  console.log("onclick");
    // make a newCharacter obj
    var newProfile = {
      // name from name input
      person_name: $("#name").val().trim(),
      // role from role input
      gender: $("#gender").val().trim(),
      // age from age input
      activity: $("#activity").val().trim(),
      area: $("#area").val().trim(),
      intensity: $("#intensity").val().trim(),
      image: $("#userPhoto").val().trim(),
      
    };
    var exactmatches = "";
    $.post("/api/exactmatch", newProfile)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log("exactmatch ", data);
     exactmatches=data;
      // tell the user we're adding a character with an alert window
    });
    var activityintensity = "";
    $.post("/api/activityintensity", newProfile)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log("matchactivityintensicy ", data);
      activityintensity=data;
      // tell the user we're adding a character with an alert window
    });
    var activityarea = "";
    $.post("/api/activityarea", newProfile)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log("matchactivityarea ", data);
      activityarea=data;
      // tell the user we're adding a character with an alert window
    });
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newProfile)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
       
        // tell the user we're adding a character with an alert window
      });
  
    // empty each input box by replacing the value with an empty string
    $("#person_name").val("");
    $("#gender").val("");
    $("#activity").val("");
    $("#area").val("");
    $("#intensity").val("");
  
  });