$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var newCharacter = {
      // name from name input
      name: $("#name").val().trim(),
      // role from role input
      role: $("#role").val().trim(),
      // age from age input
      age: $("#age").val().trim(),
      // points from force-points input
      forcePoints: $("#force-points").val().trim()
    };
});