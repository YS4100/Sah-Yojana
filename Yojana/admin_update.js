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

  function display(){
    firebase.auth().onAuthStateChanged(user => {
    if(user)
    {
      var queryString = location.search.substring(1);
       var idd = queryString.split("?");
       //console.log(idd);
      var formdata=document.getElementById('data');
     
      firebase.database().ref('Yojanas/' + idd).once("value").then(function(snapshot) {
        var name=snapshot.val().name;
        //console.log(name);
        var id=snapshot.val().id;
        var domain=snapshot.val().domain;
        var description=snapshot.val().description;
        var guidelines=snapshot.val().guidelines;
        var eligibility=snapshot.val().eligibility;
        var image=snapshot.val().image;
        var video=snapshot.val().video;
        var criteria=snapshot.val().criteria;
        var checkstatus = snapshot.val().checkstatus;
        var applylink=snapshot.val().applylink;
        var helpline=snapshot.val().helpline;

        formdata.innerHTML+=`
            Name  : <input id="name" value="${name}" readonly><br><br>
            ID  : <input id="id" value="${id}" readonly><br><br>
            Domain  : <input id="domain" value="${domain}"><br><br>
            Description  : <textarea id="description" rows="3">${description}</textarea><br><br><br><br>
            Guidelines  : <textarea id="guidelines" rows="3">${guidelines}</textarea><br><br><br><br>

            Eligibility : <textarea id="eligibility" rows="3">${eligibility}</textarea><br><br><br><br>

            Image  : <input id="image" value="${image}"><br><br>
            Video  : <input id="video" value="${video}"><br><br>
            Criteria  : <input id="criteria" value="${criteria}"><br><br>
            Check Status Link :   <input id="checkstatus" value="${checkstatus}"><br><br>
            Helpline : <input id="helpline" value="${helpline}"><br><br>
            Apply Link  : <input id="applylink" value="${applylink}"><br><br>
          `
      });

    }
  });
  }
  function submit(){
     firebase.auth().onAuthStateChanged(user => {
    if(user)
    {
       var queryString = location.search.substring(1);
       var idd = queryString.split("?");
      var formdata=document.getElementById('data');
      var ref = firebase.database().ref('Yojanas/'+idd);
      ref.once("value").then(function(snapshot){
          snapshot.forEach(property => {
          var prop = property.key;
          var array=["disabled", "applied", "bookmarked"];
          if(array.includes(prop)==false){
        //console.log(prop);
          var val= document.getElementById(prop).value;
            if(val!="")
            {
               ref.update({
              [prop] : val
              });
            }
            else
            {
              var arr=["image","video","helpline","checkstatus"];
              if(arr.includes(prop)==false)
              alert("Field/s cannot be empty!!");
              else
              {
                ref.update({
                  [prop] : val
                });
              }
            }

        }
        });
      });
    }
  });
  }

  window.addEventListener('load',display);
