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

function removeyojana(){

  firebase.auth().onAuthStateChanged(user => {
    if(user){

      var queryString = location.search.substring(1);
      var id = queryString.split("?");
        //var user = firebase.auth().currentUser.uid;
      
      var ref1 = firebase.database().ref('Yojanas/' + id);
      ref1.remove();
      //console.log('hiiiiiiiiiiiiiiii');


}
});
}
function disableyojana(){

  firebase.auth().onAuthStateChanged(user => {
    if(user){

      var queryString = location.search.substring(1);
      var id = queryString.split("?");
        //var user = firebase.auth().currentUser.uid;
      
      var ref1 = firebase.database().ref('Yojanas/' + id);
      //ref1.remove();
      ref1.once("value").then(function(snapshot) {
        ref1.update({
          disabled:"yes"
        });
      });


}
});
}
//document.getElementById('remove').addEventListener('click',removeyojana);
document.getElementById('remove').addEventListener('click',function(){
  setTimeout(myURL,5000);
function myURL(){
          window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Yojana/yojana_admin.html");  
         }
       });
document.getElementById('disable').addEventListener('click',function(){
  setTimeout(myURL,5000);
function myURL(){
          window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Yojana/yojana_admin.html");  
         }
       });