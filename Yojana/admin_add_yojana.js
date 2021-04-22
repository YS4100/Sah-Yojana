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
  function addyojana(){
    var name=document.getElementById('name').value;
    var id=document.getElementById('id').value;
    var domain=document.getElementById('domain').value;
    var desc=document.getElementById('description').value;
    var video=document.getElementById('video').value;
    var img=document.getElementById('image').value;
    var elig=document.getElementById('eligibility').value;
    var guide=document.getElementById('guidelines').value;
    var applylink = document.getElementById('applylink').value;
    var checkstatus = document.getElementById('checkstatuslink').value;
    var helpline = document.getElementById('helpline').value;
    var criteria = document.getElementById('criteria').value;
    criteria=criteria.toLowerCase();
    //console.log(name);
    if(name=="" || id=="" || domain=="none" || desc=="" || elig=="" || guide=="" || applylink=="" || criteria==""){
      alert("Please enter all the details before submitting!")
    }
    else
    {
       firebase.database().ref('Yojanas/' + id).set({
      name:name,
      id:id,
      domain:domain,
      description:desc,
      video:video,
      image:img,
      eligibility:elig,
      guidelines:guide,
      applylink: applylink,
      criteria: criteria,
      checkstatus: checkstatus,
      helpline: helpline,
      applied :0,
      bookmarked: 0,
      disabled: "no"
      });
    firebase.database().ref('Users').once("value").then(function(snapshot) {
        snapshot.forEach(
        function(ChildSnapshot){
          var email=ChildSnapshot.val().email;
          var user_name=ChildSnapshot.val().name;
          var sub = `Announcement: ${name}`;
          var body = `<p>Hello ${user_name},<br><br>
          <b>${name}</b> has been posted on the website. Please visit the website to know the guidelines and eligibility of yojana.<br><br>
          Regards,<br>Team Sah-Yojana.</p>`;
          Email.send({
            SecureToken: "6874ee7a-699d-49b4-8501-c21635e200b2",
            To: email,
            From: "sahyojana@gmail.com",
            Subject: sub,
            Body: body
          })
  }
  )
      });
    document.getElementById("addy").reset();
  }
    }
   
 document.getElementById('submit').addEventListener('click', addyojana);
 //window.addEventListener('load',emails);