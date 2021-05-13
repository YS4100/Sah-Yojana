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

    firebase.database().ref('Users/' + temp ).once("value").then(function(snapshot){
       var flag = snapshot.val().completeprofile;
       console.log(flag);
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
    window.location.href='check_status.html';
  }

 };
})

 function addi(name, appid, link, helpline){
    document.getElementById('list').innerHTML+=`
    <div class="card">
   
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Your Application ID is: ${appid}<br>Helpline Number: ${helpline}</p>
    <a href="#" class="btn btn-primary" onclick="check('${link}')">Check Application Status</a>
    <a href="#" class="btn btn-primary" onclick="copy('${appid}')">Copy Application ID</a>
  </div>
  </div>
  `
  }

function check(link)
{
  console.log(link);
  if(link=="")
  {
    console.log("hi");
    alert("Tracking not available for this yojana");
  }
  else
  {
    window.location.href=link;
  }
}
function copy(appid){
  
  var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = appid;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}


  function display(){
     firebase.auth().onAuthStateChanged(user => {
    if(user){
      var user=firebase.auth().currentUser.uid;
       var ref = firebase.database().ref('Users/' + user);
       ref.once("value").then(function(snapshot) {
        var applydone = snapshot.val().applydone;
        ref.child("appid").once("value").then(function(snap){
          snap.forEach(property => {
          var id = property.key;
          var appid= property.val(); 
          //console.log(appid);
           firebase.database().ref('Yojanas/' +id).once("value").then(function(snaps) {
            var name=snaps.val().name;
            var link = snaps.val().checkstatus;
            var helpline = snaps.val().helpline;

            addi(name, appid, link, helpline);
    });
          });
        });

       });
    }
  });
   
  }



  window.addEventListener('load', display);