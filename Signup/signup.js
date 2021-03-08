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
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var pass = getInputVal('pass');
  var confpass = getInputVal('confpass');

  // Save message
  if(checkForm(name, email, phone, pass, confpass)){
  createUser(name, email, phone, pass, confpass);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('signup').reset();
  // Clear form
}


 

}
function checkForm(name, email, phone, password,confpass){
  var atposition=email.indexOf("@");  
  var dotposition=email.lastIndexOf(".");
  if(name==""){
      document.getElementById('nm').innerHTML=" *Please enter your name!";
      return false;
    }

    if(email==""){
      document.getElementById('emailid').innerHTML=" *Please enter the Email ID!";
      return false;
    }
   
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
          document.getElementById('emailid').innerHTML=" *Please enter a valid email address!";
          return false;  
      }  
      if(mobile==""){
        document.getElementById('mobile').innerHTML=" *Please enter the Mobile Number!";
      return false;
      }
      if(isNaN(phone)){
        document.getElementById('mobile').innerHTML=" *Please enter a valid Mobile Number!";
      return false;
      }
      if(phone.length!=10){
        document.getElementById('mobile').innerHTML=" *Mobile Number should be of 10 digits!";
      return false;
      }
    if(password==""){
      document.getElementById('password').innerHTML=" *Please enter the password!";
      return false;
    }
    if(password.length<7){
      document.getElementById('password').innerHTML=" *Password length must be atleast 7 characters!";
      return false;
    }
   
    if(confpass==""){
      document.getElementById('cpass').innerHTML=" *Please re-enter the password!";
      return false;
    }
    if(password!=confpass){
      document.getElementById('cpass').innerHTML=" *Passwords didn't match!";
      return false;
    }
    return true;
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function createUser(name, email, phone, password){
 
    firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
      var id=firebase.auth().currentUser.uid;
      firebase.database().ref('Users/'+id).set({
       name: name,
       phone:phone
      });
    })
}