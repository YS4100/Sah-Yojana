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
  window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/index.html");
 }
 else if(user!=null)
 {
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/index_login.html");
 }
};
  document.getElementById('yojana').onclick=function(){
  
 if(user==null)
 {
  //console.log("aaaaaaaaaaaaaaaaaaaaaa");
  window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Signup/login.html");
 }
 else if(user!=null)
 {
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Yojana/yojana.html");
 }
};
document.getElementById('bookmark').onclick=function(){
  //var user=firebase.auth().currentUser;
 if(user==null)
 {
  window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Signup/login.html");
 }
 else
 {
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Bookmark/bookmark.html");
 }
};
document.getElementById('profile').onclick=function(){
  //var user=firebase.auth().currentUser;
 if(user==null)
 {
  window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Signup/login.html");
 }
 else
 {
    var temp = firebase.auth().currentUser.uid;

    firebase.database().ref('Users/' + temp ).once("value").then(function(snapshot){
       var flag = snapshot.val().completeprofile;
       console.log(flag);
       if(flag == "no")
         window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Profile/profile.html");
       else
         window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Profile/edit_profile.html");
    }); 
 }
};
})



document.getElementById('logout').addEventListener('click', logout);
function logout()
{
 const logoutBtn = document.querySelector('#logout');
    logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    firebase.auth().signOut();
    //console.log('User signed out!');
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/index.html");
  }); 
}

/*function test(){
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
       let ans=["junk"];
       //console.log(applydone);
       if(applypending.length>1 && showprompt=="yes"){
        //console.log('hi');
         //for(var i=1;i<applypending.length;i++){
          //var id=applypending[i];
          //if(id!=""){
          firebase.database().ref('Yojanas').once("value").then(function(snapshot){
            snapshot.forEach(
              function(childSnapshot){
                var name=childSnapshot.val().name;
                var id = childSnapshot.val().id;
                if(applypending.includes(id))
                {
                   var status = prompt("Have you applied to "+name+"?", "Enter Yes/No");
                   ans.push(status.toLowerCase());
                }
              });
         
        });
        //}
      //}
      console.log(ans);
      for(var i=1;i<ans.length;i++)
      {
        //console.log('hi');
        if(ans[i]=="yes")
        {
          var temp = '?' + applypending[i];
          pending = pending.replace(temp,"");
          applydone=applydone+'?'+id;
        }
        else
        {
          console.log('No');
        }
      }
      //console.log(applydone);
      //console.log(ans);
       reff.update({
        //showprompt:"no"
            applydone:applydone,
            applypending:pending
        });

     }
   });
      }
    });
}
      

window.addEventListener('load',test);*/
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
                   var status = prompt("Have you applied to "+name+"?", "Enter Yes/No");
                   if(status.toLowerCase()=="yes"){
                    //var appid = prompt("Please Enter your Application ID");
                    //if(appid!=null)
                    //{
                      //var temp = appid;
                    //}
                    var temp = '?' + id ;
                    pending = pending.replace(temp,"");
                    applydone=applydone+'?'+id;
                     console.log(applydone);
                     reff.update({
                    showprompt: "no",
                    applydone: applydone,
                    applypending: pending

                    });
                    var sub = `Announcement: ${name}`;
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
                   else{
                     console.log('No');
                    }
                }
              });
           });

        }
      });
      }
    });
};

window.addEventListener('load',test);