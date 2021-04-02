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
    firebase.database().ref('Users/' +temp ).once("value").then(function(snapshot){
       var flag = snapshot.val().completeprofile;
       if(flag == "no")
         window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Profile/profile.html");
       else
         window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Profile/edit_profile.html");
    });  
 }
};
})
  function display(){
    firebase.auth().onAuthStateChanged(user => {
    if(user)
    {
      var user = firebase.auth().currentUser.uid;
      var formdata=document.getElementById('data');
      var ref = firebase.database().ref('Users/'+user);
      ref.once("value").then(function(snapshot){
          var name=snapshot.val().name;
          var gender=snapshot.val().gender;
          var age=snapshot.val().age;
          var address=snapshot.val().address;
          var city=snapshot.val().city;
          var state=snapshot.val().state;
          var country=snapshot.val().country;
          var phone=snapshot.val().phone;
          var email=snapshot.val().email;
          var caste=snapshot.val().caste;
          var annualincome=snapshot.val().annualincome;
          var bpl=snapshot.val().bpl;
          var occupation=snapshot.val().occupation;
          formdata.innerHTML+=`
            name  : <input id="name" value=${name}><br><br>
            gender  : <input id="gender" value=${gender}><br><br>
            age  : <input id="age" value=${age}><br><br>
            phone  : <input id="phone" value=${phone}><br><br>
            email  : <input id="email" value=${email}><br><br>
            address : <input id="address" value=${address}><br><br>
            city  : <input id="city" value=${city}><br><br>
            state  : <input id="state" value=${state}><br><br>
            country  : <input id="name" value=${country}><br><br>
            caste  : <input id="caste" value=${caste}><br><br>
            annualincome  : <input id="annualincome" value=${annualincome}><br><br>
            bpl  : <input id="bpl" value=${bpl}><br><br>
            occupation  : <input id="occupation" value=${occupation}><br><br>
          `
          snapshot.forEach(property => {
          var prop = property.key;
          var val = property.val();
          var array=["name","gender","age","phone","address","state","city","country","bookmarked","email","caste","annualincome","bpl","occupation", "completeprofile"];
          if(array.includes(prop)==false){
          formdata.innerHTML+=`
            ${prop}  : <input id=${prop} value=${val}><br><br>
          `
        }
        });
      }
      );
    }
  });
  }

  function submit(){
    firebase.auth().onAuthStateChanged(user => {
    if(user)
    {
      var user = firebase.auth().currentUser.uid;
      var formdata=document.getElementById('data');
      var ref = firebase.database().ref('Users/'+user);
      ref.once("value").then(function(snapshot){
          snapshot.forEach(property => {
          var prop = property.key;
          var val= document.getElementById(prop).value;
 
          ref.update({
            [prop] : val
          });
        });
      }
      );
    }
  });
  }
  window.addEventListener('load',display);