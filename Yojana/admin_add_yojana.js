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
    //console.log(name);
    firebase.database().ref('Yojanas/' + id).set({
      name:name,
      id:id,
      domain:domain,
      description:desc,
      video:video,
      image:img,
      eligibility:elig,
      guidelines:guide
      });
    document.getElementById("addy").reset();
  }
 document.getElementById('submit').addEventListener('click', addyojana);