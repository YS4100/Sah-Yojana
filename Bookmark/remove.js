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
    window.location.href='bookmark.html';
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
})


function remove(){
  //console.log("hi");
  //document.getElementById('rem').addEventListener()
   
  firebase.auth().onAuthStateChanged(user => {
    if(user){
    	var queryString = location.search.substring(1);
  		var id = queryString.split("?");
        var user = firebase.auth().currentUser.uid;
  		var ref1 = firebase.database().ref('Users/').child(user);
  		ref1.once("value").then(function(snapshot){
   		var tmp=snapshot.val().bookmarked;
   //var queryString = location.search.substring(1);
    //var id = queryString.split("?");
   var temp = '?' + id + '?';
   //console.log(temp);
        var data = tmp.replace(temp,'?');
        console.log(data);
        ref1.update({
          'bookmarked':data

        });
        window.location.href='bookmark.html';
         });
  
        


}
});
}
/*//setTimeout(myURL,5000);
function myURL(){
            
         }*/