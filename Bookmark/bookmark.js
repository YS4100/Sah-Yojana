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
  window.location.href='../Signup/login.html';
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
  window.location.href='../Signup/login.html';
 }
 else
 {
    window.location.href='bookmark.html';
 }
};
document.getElementById('profile').onclick=function(){
  //var user=firebase.auth().currentUser;
 if(user==null)
 {
  window.location.href='../Signup/login.html';
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
       window.location.href='../Signup/login.html';
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
    window.location.href='../Signup/login.html';
  }
  else
  {
    window.location.href='../Check Status/check_status.html';
  }

 };
})
function addi(name,domain,desc,video,img,id,cnt){
    /*let ul=document.getElementById("list");
    var blog_card=document.createElement('div');*/

    

    if(cnt%2==0){
        //blog_card.className="blog-card";
        document.getElementById('list').innerHTML+=`
        <div class="blog-card">
        <div class="meta">
        <div class="photo" style="background-image: url(${img})"></div>
        <ul class="details">

          <li class="tags">
            <ul>
              <li><a href='${video}'>Video</a></li>
            </ul>
          </li>
        </ul>
      </div>
        <div class="description">
          <h1>${name}</h1>
          <h2>${domain}</h2>
          <p id="description2"> ${desc}</p>
          <p class="read-more">
            <a href="../Yojana/readmore.html?${id}">Read More</a>
          </p>
          <p class="read-morer" >
          <a href="remove.html?${id}" >Remove</a>
          </p>
        </div>
      </div>
      `
    }
    else{
      document.getElementById('list').innerHTML+=`
        <div class="blog-card alt">
        <div class="meta">
        <div class="photo" style="background-image: url(${img})"></div>
        <ul class="details">

          <li class="tags">
            <ul>
              <li><a href='${video}'>Video</a></li>
            </ul>
          </li>
        </ul>
      </div>
        <div class="description">
          <h1>${name}</h1>
          <h2>${domain}</h2>
          <p id="description2"> ${desc}</p>
          <p class="read-more">
            <a href="../Yojana/readmore.html?${id}">Read More</a>
          </p>
          <p class="read-morer" >
          <a href="remove.html?${id}" >Remove</a>
          </p>
        </div>
      </div>
      `

    }
       
  }
function disp(){
  var cnt=0;
  firebase.auth().onAuthStateChanged(user => {
    if(user){
    var user = firebase.auth().currentUser.uid;
    var ref = firebase.database().ref('Users/').child(user);
    ref.once("value").then(function(snapshot){
    var data = snapshot.val().bookmarked;
  //var str = data.split("?");

   //console.log(data);

   firebase.database().ref('Yojanas').once("value").then(function(snapshot) {
   snapshot.forEach(
          function(ChildSnapshot){
          var c=ChildSnapshot.val().id;
          //console.log(c);
          if((data).search(c)!=-1){
          var domain=ChildSnapshot.val().domain;
          var name=ChildSnapshot.val().name;
          var id=ChildSnapshot.val().id;
          var desc=ChildSnapshot.val().description;
          var video=ChildSnapshot.val().video;
          var img=ChildSnapshot.val().image;
          var elig=ChildSnapshot.val().eligibility;
          addi(name,domain,desc,video,img,id,cnt);
          cnt++;
        }
        }
      );
    });

  });

}
});
}





window.addEventListener('load', disp);

