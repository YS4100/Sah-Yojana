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
firebase.auth().onAuthStateChanged(user => {
    document.getElementById('home').onclick=function(){
  
 if(user==null)
 {
  //console.log("aaaaaaaaaaaaaaaaaaaaaa");
  window.location.replace("file:../index.html");
 }
 else if(user!=null)
 {
    window.location.replace("file:../index_login.html");
 }
};
  document.getElementById('yojana').onclick=function(){
  
 if(user==null)
 {
  //console.log("aaaaaaaaaaaaaaaaaaaaaa");
  window.location.replace("file:login.html");
 }
 else if(user!=null)
 {
    window.location.replace("file:../Yojana/yojana.html");
 }
};
document.getElementById('bookmark').onclick=function(){
  //var user=firebase.auth().currentUser;
 if(user==null)
 {
  window.location.replace("file:login.html");
 }
 else
 {
    window.location.replace("file:../Bookmark/bookmark.html");
 }
};
document.getElementById('profile').onclick=function(){
  //var user=firebase.auth().currentUser;
 if(user==null)
 {
  window.location.replace("file:login.html");
 }
 else
 {
   var temp = firebase.auth().currentUser.uid;
    firebase.database().ref('Users/' +temp ).once("value").then(function(snapshot){
       var flag = snapshot.val().completeprofile;
       if(flag == "no")
         window.location.replace("file:../Profile/profile.html");
       else
         window.location.replace("file:../Profile/edit_profile.html");
    }); 
 }
};
document.getElementById('recommend').onclick=function(){
     if(user==null)
     {
       window.location.replace("file:login.html");
      }
      else
      {
        window.location.replace("file:../Yojana/recommend.html");
      }
 };
 document.getElementById('applied').onclick=function()
 {
  if(user==null)
  {
    window.location.replace("file:login.html");
  }
  else
  {
    window.location.replace("file:../Check Status/check_status.html");
  }

 };
})
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