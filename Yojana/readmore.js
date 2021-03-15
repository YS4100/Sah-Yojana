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
  function setter(){
    var queryString = location.search.substring(1);
    var idd = queryString.split("?");
    firebase.database().ref('Yojanas').once("value").then(function(snapshot) {
        snapshot.forEach(
        function(ChildSnapshot){
      const data= ChildSnapshot.val();
      //console.log(data);
      if(data.id==idd[0]){
          var _name=document.getElementById('name');
          _name.innerHTML=data.name;
          var _desc=document.getElementById('desc');
          _desc.innerHTML=data.description;
          var _video=document.getElementById('video');
          _video.setAttribute('src',data.video);
          var _elig=document.getElementById('eligibility');
          _elig.innerHTML=data.eligibility;
          var _guide=document.getElementById('guidelines');
          _guide.innerHTML=data.description;
          document.body.style.background='linear-gradient(rgba(256,256,256,0.7),rgba(256,256,256,0.7)), url('+data.image+'), center, no-repeat, cover';
        }
      });
    });
    /*var name = myData[0];
    var desc = myData[1];
    var video = myData[2];
    var img = myData[3];
    var elig=myData[4];*/
   
  }

  window.addEventListener('load', setter);
