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
// Listen for form submit
firebase.auth().onAuthStateChanged(user => {
  document.getElementById('home').onclick=function(){
  
 if(user==null)
 {
  //console.log("aaaaaaaaaaaaaaaaaaaaaa");
  window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/index.html");
 }
 else if(user!=null)
 {
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/index_login.html");
 }
};
  document.getElementById('yojana').onclick=function(){
  
 if(user==null)
 {
  //console.log("aaaaaaaaaaaaaaaaaaaaaa");
  window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Signup/login.html");
 }
 else if(user!=null)
 {
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Yojana/yojana.html");
 }
};
document.getElementById('bookmark').onclick=function(){
  //var user=firebase.auth().currentUser;
 if(user==null)
 {
  window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Signup/login.html");
 }
 else
 {
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Bookmark/bookmark.html");
 }
};
document.getElementById('profile').onclick=function(){
  //var user=firebase.auth().currentUser;
 if(user==null)
 {
  window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Signup/login.html");
 }
 else
 {
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Profile/profile.html");
 }
};
})

document.getElementById('submit').addEventListener('click', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var email = getInputVal('email');
  var pass = getInputVal('pass');

  // Save message
  if(checkForm(email, pass)){
  loginUser(email,pass);
}


 

}
function checkForm(email, pass){
  var atposition=email.indexOf("@");  
  var dotposition=email.lastIndexOf(".");
  if(email==""){
      document.getElementById('emailid').innerHTML=" *Please enter the Email ID!";
      return false;
    }
    if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
          document.getElementById('emailid').innerHTML=" *Please enter a valid email address!";
          return false;  
      }
    if(pass==""){
      //document.getElementById('username').innerHTML=" *Please enter the username!";
      document.getElementById('password').innerHTML=" *Please enter the password!";
      return false;
    }
    return true;
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}


    
// Save message to firebase
function loginUser(email,pass){
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    firebase.auth().signInWithEmailAndPassword(email,pass).then(function(){
    var id=firebase.auth().currentUser.uid;
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/index_login.html");
    if(email=="sahyojana@gmail.com")
      window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/index_login_admin.html");
    else
      window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/index_login.html");
    localStorage.setItem('id',id);
   
   }).catch(function(){
       document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('login').reset();
    });
}
