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


function enableyojana(){

  firebase.auth().onAuthStateChanged(user => {
    if(user){

      var queryString = location.search.substring(1);
      var id = queryString.split("?");
        //var user = firebase.auth().currentUser.uid;
      
      var ref1 = firebase.database().ref('Yojanas/' + id);
      //ref1.remove();
      ref1.once("value").then(function(snapshot) {
        ref1.update({
          disabled:"no"
        });
      });


}
});
}
//document.getElementById('remove').addEventListener('click',removeyojana);

document.getElementById('enable').addEventListener('click',function(){
  setTimeout(myURL,2000);
function myURL(){
          window.location.href='yojana_admin.html';  
         }
       });