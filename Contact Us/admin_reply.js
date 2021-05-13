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

  function addi(name,issue,msg,yojana){
    document.getElementById('list').innerHTML+=`
    <form class="p-3" id="addy" method="post">
    <div class="form-group">
     <label for="name">User: ${name}</label><br>
    <label for="issue">${issue}</label><br>
    <label for="yojana">For Yojana: ${yojana}</label><br>
    <label for="msg">Message: ${msg}</label><br>

  
    <label for="reply">Reply</label>
    <textarea class="form-control" id="reply" rows="7"></textarea>
    
    
    <br>
    <div align="center">
      <div class="header-buttons">
      <a href="#" id="send" onclick="sendEmail()"/>SEND</a>
    </div>
</div>
</form>
  `
  }
function myURL()
{
  window.location.href='admin_complaint.html';  
}
  function display(){
    var queryString = location.search.substring(1);
    var key = queryString.split("?");
    firebase.database().ref('Complaints/' + key).once("value").then(function(ChildSnapshot) {
          var name=ChildSnapshot.val().name;
          var issue=ChildSnapshot.val().issue;
          var email=ChildSnapshot.val().email;
          var msg=ChildSnapshot.val().msg;
          var yojana=ChildSnapshot.val().yojana;
          //var key = ChildSnapshot.key;
          addi(name,issue,msg,yojana);
    });
  }

function sendEmail(){
  firebase.auth().onAuthStateChanged(user => {
    var reply=document.getElementById('reply').value;
    var queryString = location.search.substring(1);
    var key = queryString.split("?");
    var ref=firebase.database().ref('Complaints/'+key);
    ref.once("value").then(function(snapshot) {
      var email=snapshot.val().email;
//console.log(email);
    Email.send({
        SecureToken: "6874ee7a-699d-49b4-8501-c21635e200b2",
        To: email,
        From: "sahyojana@gmail.com",
        Subject: "Reply for Complaint",
        Body: reply,
      })
        .then(function (message) {
          alert("mail sent successfully");
          ref.update({
              reply: reply,
              resolved: "yes"
          });
          var reff=firebase.database().ref('Users/ADfh8gMpbyen3AAEF6AkNBy1D1j1');
          reff.once("value").then(function(snapshot){
            var resolved=snapshot.val().resolved;
            resolved=parseInt(resolved);
            resolved++;
            reff.update({
              resolved:resolved
            })
          });
          setTimeout(myURL,3000);
        });
  });
  });
}

  window.addEventListener('load', display);

