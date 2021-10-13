var config = {
    aapiKey: "AIzaSyDJUozSfC37VIPKDnYZ32pZqEZIioM-cGw",
    authDomain: "stonedgetech-au.firebaseapp.com",
    databaseURL: "https://stonedgetech-au-default-rtdb.firebaseio.com",
    projectId: "stonedgetech-au",
    storageBucket: "stonedgetech-au.appspot.com",
    messagingSenderId: "1054509002738",
    appId: "1:1054509002738:web:875e9d1f32d7497e44056b",
    measurementId: "G-HZ5CRFSDWZ"  
   
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
    var subject =getInputVal('subject');
    var message = getInputVal('message');

  
    // Save message
    saveMessage(name, email,subject, message);
  
    // Show alert
    document.querySelector('.loading').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.loading').style.display = 'none';
    },500);
  
    setTimeout(function(){
      document.querySelector('.sent-request').style.display = 'block';
    },800);
   
    setTimeout(function(){
    document.getElementById('contactForm').reset();
     location.reload(true);
    },1500);
  }
  
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email,subject,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      subject:subject,
      message:message
    });
  }