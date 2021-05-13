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
  window.location.href='../index.html';
 }
 else if(user!=null)
 {
    window.location.href='../index_login.html';
 }
};
  document.getElementById('yojana').onclick=function(){
  
 if(user==null)
 {
  //console.log("aaaaaaaaaaaaaaaaaaaaaa");
  window.location.href='../Signup/login.html';
 }
 else if(user!=null)
 {
    window.location.href='../Yojana/yojana.html';
 }
};
document.getElementById('bookmark').onclick=function(){
  //var user=firebase.auth().currentUser;
 if(user==null)
 {
  window.location.href='../Signup/login.html';
 }
 else
 {
    window.location.href='../Bookmark/bookmark.html';
 }
};
document.getElementById('profile').onclick=function(){
  //var user=firebase.auth().currentUser;
 if(user==null)
 {
  window.location.href='../Signup/login.html';
 }
 else
 {
   var temp = firebase.auth().currentUser.uid;
    firebase.database().ref('Users/' +temp ).once("value").then(function(snapshot){
       var flag = snapshot.val().completeprofile;
       if(flag == "no")
         window.location.href='../Profile/profile.html';
       else
         window.location.href='../Profile/edit_profile.html';
    }); 
 }
};
document.getElementById('recommend').onclick=function(){
     if(user==null)
     {
       window.location.href='../Signup/login.html';
      }
      else
      {
        window.location.href='../Yojana/recommend.html';
      }
 };
 document.getElementById('applied').onclick=function()
 {
  if(user==null)
  {
    window.location.href='../Signup/login.html';
  }
  else
  {
    window.location.href='../Check Status/check_status.html';
  }

 };
})
function check(email,issue,msg){
  var atposition=email.indexOf("@");  
  var dotposition=email.lastIndexOf(".");
  if(email==""){
    alert("Please enter email ID!");
    return false;
  }
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
          alert("Please enter a valid email address!"); 
          return false;
  } 
  if(issue=="none"){
    alert("Please select an issue!");
    return false;
  } 
  if(msg==""){
    alert("Please enter details of the issue!");
    return false;
  }
  return true;
}
function addcomplain(){
      //console.log('hiiiiiiiiiiiiii');
      //firebase.auth().onAuthStateChanged(user => {
      //var user = firebase.auth().currentUser.uid;
      var name=document.getElementById('name').value;
      var email=document.getElementById('email').value;
      var yojana=document.getElementById('yojananame').value;
      var issue=document.getElementById('issue').value;
      var msg=document.getElementById('msg').value;
      if(check(email,issue,msg)){
      var ref=firebase.database().ref('Complaints');
      console.log('hi');
      ref.push({
       name: name,
       email:email,
       yojana: yojana,
       issue: issue,
       msg:msg,
       resolved: "no"
      });
      var reff=firebase.database().ref('Users/ADfh8gMpbyen3AAEF6AkNBy1D1j1');
          reff.once("value").then(function(snapshot){
            var complaints=snapshot.val().complaints;
            complaints++;
            reff.update({
              complaints:complaints
            })
          });
      document.getElementById('compform').reset();
    }
   // });
}
document.getElementById('submit').addEventListener('click',addcomplain);