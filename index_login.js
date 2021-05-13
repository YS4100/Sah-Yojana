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
firebase.auth().onAuthStateChanged(user => {
   document.getElementById('home').onclick=function(){
  
 if(user==null)
 {
  //console.log("aaaaaaaaaaaaaaaaaaaaaa");
  window.location.href='index.html';
 }
 else if(user!=null)
 {
    window.location.href='index_login.html';
 }
};
  document.getElementById('yojana').onclick=function(){
  
 if(user==null)
 {
  //console.log("aaaaaaaaaaaaaaaaaaaaaa");
  window.location.href='Signup/login.html';
 }
 else if(user!=null)
 {
    window.location.href='Yojana/yojana.html';
 }
};
document.getElementById('bookmark').onclick=function(){
  //var user=firebase.auth().currentUser;
 if(user==null)
 {
  window.location.href='Signup/login.html';
 }
 else
 {
    window.location.href='Bookmark/bookmark.html';
 }
};
document.getElementById('profile').onclick=function(){
  //var user=firebase.auth().currentUser;
 if(user==null)
 {
  window.location.href='Signup/login.html';
 }
 else
 {
    var temp = firebase.auth().currentUser.uid;

    firebase.database().ref('Users/' + temp ).once("value").then(function(snapshot){
       var flag = snapshot.val().completeprofile;
       console.log(flag);
       if(flag == "no")
         window.location.href='Profile/profile.html';
       else
         window.location.href='Profile/edit_profile.html';
    }); 
 }
 };
 document.getElementById('recommend').onclick=function(){
     if(user==null)
     {
       window.location.href='Signup/login.html';
      }
      else
      {
        window.location.href='Yojana/recommend.html';
      }
 };
 document.getElementById('applied').onclick=function()
 {
  if(user==null)
  {
    window.location.href='Signup/login.html';
  }
  else
  {
    window.location.href='Check Status/check_status.html';
  }

 };
})



document.getElementById('logout').addEventListener('click', logout);
function logout()
{
 const logoutBtn = document.querySelector('#logout');
    logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    var id=firebase.auth().currentUser.uid;
         // console.log(id);
          firebase.database().ref('Users/'+id).update({
              isOnline: "no"
            });
    firebase.auth().signOut();
    //console.log('User signed out!');
    window.location.href='index.html';
  }); 
}
function test(){
  firebase.auth().onAuthStateChanged(user => {
    if(user){
      var user=firebase.auth().currentUser.uid;
      //console.log(user);
      var reff=firebase.database().ref('Users/'+user);
        reff.once("value").then(function(snapshot){
       var pending=snapshot.val().applypending;
       var showprompt=snapshot.val().showprompt;
       var applypending = pending.split("?");
       var applydone=snapshot.val().applydone;
       var email = snapshot.val().email;
       var user_name = snapshot.val().name;
       //console.log(applypending);
       if(applypending.length>1 && showprompt=="yes"){
          firebase.database().ref('Yojanas').once("value").then(function(snapshot){
             snapshot.forEach(
              function(childSnapshot){
                var name=childSnapshot.val().name;
                var id = childSnapshot.val().id;
                if(applypending.includes(id))
                {
                   var status = prompt("Have you applied to "+name+"? Enter \n'Yes' if you have applied \n'Later' if you will apply later \n'No' if you dont want to apply!", "Enter Yes/Later/No");
                   if(status.toLowerCase()=="yes"){
                    var appid = prompt("Please Enter your Application ID for " + id);
                    var temp = '?' + id ;
                    pending = pending.replace(temp,"");
                    applydone=applydone+'?'+id;
                     console.log(applydone);
                     reff.update({
                    showprompt: "no",
                    applydone: applydone,
                    applypending: pending
                    });
                     var refff=firebase.database().ref('Yojanas/'+id);
                    refff.once("value").then(function(snapshot){
                      var applied=snapshot.val().applied;
                      applied++;
                      refff.update({
                        applied:applied
                      })
                    });
                     if(appid)
                     {
                         firebase.database().ref('Users/'+ user).child("appid").update({
                          [id]: appid
                          });
                     }
                     else
                     {
                         firebase.database().ref('Users/'+ user).child("appid").update({
                          [id]: ""
                          });
                     }
                   
                    var sub = `Feedback: ${name}`;
                    var body = `<p>Hello ${user_name},<br><br>
                    We got to know that you have applied for <b>${name}</b>. Please submit your feedback so that we can help you through the process.<br><br>
                    Click <a href="https://forms.gle/NKXz1CbnHD4vH32A8">Here</a> to fill the feedback.<br><br>
                    Regards,<br>Team Sah-Yojana.</p>`;
                    Email.send({
                      SecureToken: "6874ee7a-699d-49b4-8501-c21635e200b2",
                      To: email,
                      From: "sahyojana@gmail.com",
                      Subject: sub,
                      Body: body
                    })

                  }
                  else if(status.toLowerCase()=="no"){
                    var temp = '?' + id ;
                    pending = pending.replace(temp,"");
                     //console.log(applydone);
                     reff.update({
                    showprompt: "no",
                    applydone: applydone,
                    applypending: pending
                    });
                  }
                   else{
                     console.log('Later');
                     reff.update({
                      showprompt: "no"
                     });
                    }
                }
              });
           });

        }
        else
        {
          reff.update({
            showprompt: "no"
          });
        }
      });
      }
    });
};

window.addEventListener('load',test);