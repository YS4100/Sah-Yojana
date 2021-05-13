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
  window.location.href='login.html';
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
  window.location.href='login.html';
 }
 else
 {
    window.location.href='../Bookmark/bookmark.html';
 }
};
document.getElementById('profile').onclick=function(){
  //var user=firebase.auth().currentUser;
 if(user==null)
 {
  window.location.href='login.html';
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
document.getElementById('recommend').onclick=function(){
     if(user==null)
     {
       window.location.href='login.html';
      }
      else
      {
        window.location.href='../Yojana/recommend.html';
      }
 };
 document.getElementById('applied').onclick=function()
 {
  if(user==null)
  {
    window.location.href='login.html';
  }
  else
  {
    window.location.href='../Check Status/check_status.html';
  }

 };
})
// Listen for form submit
document.getElementById('submit').addEventListener('click', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
 /* var phone = getInputVal('phone');*/
  var pass = getInputVal('pass');
  var confpass = getInputVal('confpass');

  // Save message
  if(checkForm(name, email, pass, confpass)){
  createUser(name, email, pass, confpass);

  // Show alert
  // Clear form
}
}
function checkForm(name, email, password,confpass){
  var atposition=email.indexOf("@");  
  var dotposition=email.lastIndexOf(".");
  if(name==""){
      document.getElementById('nm').innerHTML=" *Please enter your name!";
      return false;
    }

    if(email==""){
      document.getElementById('emailid').innerHTML=" *Please enter the Email ID!";
      return false;
    }
   
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
          document.getElementById('emailid').innerHTML=" *Please enter a valid email address!";
          return false;  
      }  
   
    if(password==""){
      document.getElementById('password').innerHTML=" *Please enter the password!";
      return false;
    }
    if(password.length<7){
      document.getElementById('password').innerHTML=" *Password length must be atleast 7 characters!";
      return false;
    }
   
    if(confpass==""){
      document.getElementById('cpass').innerHTML=" *Please re-enter the password!";
      return false;
    }
    if(password!=confpass){
      document.getElementById('cpass').innerHTML=" *Passwords didn't match!";
      return false;
    }
    return true;
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
function myURL(){
                window.location.href='file:login.html';  
               }
function sendVerification(name,email){
    var user = firebase.auth().currentUser;
    //console.log(user.uid);
    user.sendEmailVerification().then(function() {
      // Email sent.
      //alert('Verification Email Sent Succesfully!');
          //console.log('hi');
          var id=firebase.auth().currentUser.uid;
          console.log(id);
          firebase.database().ref('Users/'+id).set({
           name: name,
           bookmarked:"abc?",
           email: email,
           completeprofile: "no",
           applydone: "abc",
           applypending: "abc",
           isOnline: "no",
           showprompt: "no"

          });
          document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
        setTimeout(function(){
          document.querySelector('.alert').style.display = 'none';
        },3000);

        document.getElementById('signup').reset();
        setTimeout(myURL,5000);
              
       // window.location.assign('F:/Sah-Yojana/Signup/login.html')
        
    }).catch(function(error) {
        console.log(error);
    });
}

// Save message to firebase
function createUser(name, email, password){
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
        sendVerification(name,email);
        
    })
    .catch(error =>{
      alert(error);
      document.getElementById('signup').reset();
    })
}
document.getElementById("name").addEventListener('keyup', function(){
    document.getElementById("nm").innerHTML = "";
  });

document.getElementById("email").addEventListener('keyup', function(){
    document.getElementById("emailid").innerHTML = "";
  });
/*document.getElementById("phone").addEventListener('keyup', function(){
    document.getElementById("mobile").innerHTML = "";
  });*/
document.getElementById("pass").addEventListener('keyup', function(){
    document.getElementById("password").innerHTML = "";
  });
document.getElementById("confpass").addEventListener('keyup', function(){
    document.getElementById("cpass").innerHTML = "";
  });