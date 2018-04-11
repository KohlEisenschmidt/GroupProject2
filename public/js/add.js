// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var newProfile = {
      // name from name input
      name: $("#person_name").val().trim(),
      // role from role input
      role: $("#gender").val().trim(),
      // age from age input
      activity: $("#activity").val().trim(),
      area: $("#area").val().trim(),
      intensity: $("#intensity").val().trim(),
    };
  
    // // send an AJAX POST-request with jQuery
    // $.post("/api/new", newProfile)
    //   // on success, run this callback
    //   .then(function(data) {
    //     // log the data we found
    //     console.log(data);
    //     // tell the user we're adding a character with an alert window
    //   });
  
    // empty each input box by replacing the value with an empty string
    $("#person_name").val("");
    $("#gender").val("");
    $("#activity").val("");
    $("#area").val("");
    $("#intensity").val("");
  
  });