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
    window.location.href='yojana.html';
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
        window.location.href='recommend.html';
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
          _guide.innerHTML=data.guidelines;
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

function bookmark()
{
  var queryString = location.search.substring(1);
  var idd = queryString.split("?");
  firebase.auth().onAuthStateChanged(user => {
  if(user){
  var user = firebase.auth().currentUser.uid;
  var ref = firebase.database().ref('Users/').child(user);
  ref.once("value").then(function(snapshot){
   var data=snapshot.val().bookmarked;
   if((data).search(idd[0])==-1){
    //console.log(data);
    data=data+idd+'?';
    ref.update({
      'bookmarked':data
    });
    var reff=firebase.database().ref('Yojanas/'+idd[0]);
          reff.once("value").then(function(snapshot){
            var bookmarked=snapshot.val().bookmarked;
            //resolved=parseInt(resolved);
            bookmarked++;
            reff.update({
              bookmarked:bookmarked
            })
          });
    //document.getElementById('bookmark_btn').disabled = true;
   }
   else
   {
    window.alert("Already bookmarked");
   }
  });
}
});
}

function apply()
{
  var queryString = location.search.substring(1);
  var idd = queryString.split("?");
  firebase.auth().onAuthStateChanged(user => {
  if(user){
    var userid=firebase.auth().currentUser.uid;
    var reff=firebase.database().ref('Users/'+userid);
    reff.once("value").then(function(snapshot){
   var pending=snapshot.val().applypending;
   var done=snapshot.val().applydone;
   if((pending).search(idd[0])==-1 && (done).search(idd[0])==-1){
    //console.log(data);
    pending=pending+'?'+idd;
    reff.update({
      'applypending':pending
    });
  }
});
  //var user = firebase.auth().currentUser.uid;
  var ref = firebase.database().ref('Yojanas/' + idd);
  ref.once("value").then(function(snapshot){
   var data=snapshot.val().applylink;
   window.location.replace(data);
  });
}
});
}
window.addEventListener('load', setter);
//window.addEventListener('load',scheduleMail);