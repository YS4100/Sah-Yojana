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
    var temp = firebase.auth().currentUser.uid;

    firebase.database().ref('Users/' + temp ).once("value").then(function(snapshot){
       var flag = snapshot.val().completeprofile;
       console.log(flag);
       if(flag == "no")
         window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Profile/profile.html");
       else
         window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Profile/edit_profile.html");
    }); 
 }
};
document.getElementById('recommend').onclick=function(){
     if(user==null)
     {
       window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Signup/login.html");
      }
      else
      {
        window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Yojana/recommend.html");
      }
 };
 document.getElementById('applied').onclick=function()
 {
  if(user==null)
  {
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Signup/login.html");
  }
  else
  {
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Check Status/check_status.html");
  }

 };
})

  function addi(name, appid, link){
    document.getElementById('list').innerHTML+=`
    <div class="card">
   
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Your Application ID is: ${appid}</p>
    <a href="admin_reply.html?${link}" class="btn btn-primary">Check Application Status</a>
  </div>
  </div>
  `
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
          console.log(appid);
           firebase.database().ref('Yojanas/' +id).once("value").then(function(snaps) {
            var name=snaps.val().name;
            var link = snaps.val().applylink;

            addi(name, appid, link);
    });
          });
        });

       });
    }
  });
   
  }


  window.addEventListener('load', display);