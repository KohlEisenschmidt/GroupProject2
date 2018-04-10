
// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyATOhdQTrlYEQo5ZRlQRvl12wCq2EumQ8s",
    authDomain: "contactform-c5fa8.firebaseapp.com",
    databaseURL: "https://contactform-c5fa8.firebaseio.com",
    projectId: "contactform-c5fa8",
    storageBucket: "contactform-c5fa8.appspot.com",
    messagingSenderId: "561182159021"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, subject, message);

  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  // Show alert
  document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  });
  // Function to get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      subject:subject,
      message: message
    });
  }