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

  function addi(name,issue,msg,yojana,key){
    document.getElementById('list').innerHTML+=`
    <div class="card">
  <div class="card-header">
    ${name}
  </div>
  <div class="card-body">
    <h5 class="card-title">${issue}</h5>
    <p class="card-text">${msg}</p>
    <a href="admin_reply.html?${key}" class="btn btn-primary">Reply</a>
  </div>
  </div>
  `
  }

  function display(){

    firebase.database().ref('Complaints').once("value").then(function(snapshot) {
   snapshot.forEach(
          function(ChildSnapshot){
          var name=ChildSnapshot.val().name;
          var issue=ChildSnapshot.val().issue;
          var email=ChildSnapshot.val().email;
          var msg=ChildSnapshot.val().msg;
          var yojana=ChildSnapshot.val().yojana;
          var key = ChildSnapshot.key;
          addi(name,issue,msg,yojana,key);
        }
      );
    });
  }


  window.addEventListener('load', display);