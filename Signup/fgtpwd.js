var firebaseConfig = {
    apiKey: "AIzaSyDd2lwzShfps4ihXZMceybTFhmx_IdRbxs",
    authDomain: "sahyojana-78960.firebaseapp.com",
    databaseURL: "https://sahyojana-78960-default-rtdb.firebaseio.com",
    projectId: "sahyojana-78960",
    storageBucket: "sahyojana-78960.appspot.com",
    messagingSenderId: "893801601571",
    appId: "1:893801601571:web:a9601a3556ad4bd464ef96",
    measurementId: "G-V0WQG7FMVL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //var userRef = firebase.database().ref('user');

// Listen for form submit
document.getElementById('submit').addEventListener('click', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var email = getInputVal('email');
  var auth=firebase.auth();
  if(email!=""){
    auth.sendPasswordResetEmail(email).then(function(){
        document.querySelector('.alert').style.display = 'block';
        setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);

      document.getElementById('fgtpwd').reset();
    }).catch(function(){
      document.getElementById('emailid').innerHTML=" *Email not registered!";
    });
  }
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}