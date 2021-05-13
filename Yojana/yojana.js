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
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
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
    window.location.href='yojana.html';
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
    window.location.href='../Bookmark/bookmark.html';
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
       window.location.href='.../Signup/login.html';
      }
      else
      {
        window.location.href='recommend.html';
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
    let ul=document.getElementById("list");
    var blog_card=document.createElement('div');
    if(cnt%2==0){
        blog_card.className="blog-card";
    }
    else{
      blog_card.className="blog-card alt";
    }
    var meta=document.createElement('div');
    meta.className="meta";
    var photo=document.createElement('div');
    photo.className="photo";
    photo.style.backgroundImage='url('+img+')';
    meta.append(photo);
    var details=document.createElement('ul');
    details.className="details";
    var tags=document.createElement('li');
    tags.className="tags";
    var ul1=document.createElement('ul');
    var li1=document.createElement('li');
    var aa=document.createElement('a');
    aa.innerHTML="Video";
    aa.setAttribute('href',video);
    li1.append(aa);
    ul1.append(li1);
    tags.append(ul1);
    details.append(tags);
    meta.append(details);
    blog_card.append(meta);

    var descrip=document.createElement('div');
    descrip.className="description";
    var _name=document.createElement('h1');
    _name.innerHTML=name;
    var _domain=document.createElement('h2');
    _domain.innerHTML=domain;
    var _desc=document.createElement('p');
    _desc.innerHTML=desc;
    var _read=document.createElement('p');
    _read.className="read-more";
    var _linkread=document.createElement('a');
    _linkread.className="read-more";
    //var data=[name,desc,video,img,elig];
    //localStorage.setItem('objectToPass',data);
    _linkread.setAttribute('href','readmore.html?'+id);
    _linkread.innerHTML="Read More";
    _read.append(_linkread);
    descrip.append(_name);
    descrip.append(_domain);
    descrip.append(_desc);
    descrip.append(_read);
    blog_card.append(descrip);
    ul.append(blog_card);
  }
  function disp(){
      var cnt=0;
      document.getElementById('list').innerHTML='';
      var idd=this.id;
      document.getElementById(idd).style.background='color(grey)';
      //console.log(idd);
      var ref = firebase.database().ref("Yojanas");
      firebase.database().ref('Yojanas').once("value").then(function(snapshot) {
        snapshot.forEach(
        function(ChildSnapshot){
          var name=ChildSnapshot.val().name;
          var id=ChildSnapshot.val().id;
          var domain=ChildSnapshot.val().domain;
          var desc=ChildSnapshot.val().description;
          var video=ChildSnapshot.val().video;
          var img=ChildSnapshot.val().image;
          var elig=ChildSnapshot.val().eligibility;
          var disabled=ChildSnapshot.val().disabled;
          if((domain==idd) && disabled=="no"){
          addi(name,domain,desc,video,img,id,cnt);
          cnt++;
        }
        }
      );
    });
  }


   var cnt=0;
   var yojanas=[];
  function fetch(){
    firebase.database().ref('Yojanas').once("value").then(function(snapshot) {
        snapshot.forEach(
        function(ChildSnapshot){
          var name=ChildSnapshot.val().name;
          var id=ChildSnapshot.val().id;
          var domain=ChildSnapshot.val().domain;
          var desc=ChildSnapshot.val().description;
          var video=ChildSnapshot.val().video;
          var img=ChildSnapshot.val().image;
          var elig=ChildSnapshot.val().eligibility;
         var disabled=ChildSnapshot.val().disabled;
          if(disabled=="no"){
          addi(name,domain,desc,video,img,id,cnt);
          yojanas.push(name);
          cnt++;
        }
      }
      );
    });

     //window.addEventListener('load', fetch);
     document.getElementById('all').addEventListener('click',fetchall);
  document.getElementById('Agriculture').addEventListener('click',disp);
  document.getElementById('Social-Welfare').addEventListener('click',disp);
  document.getElementById('Education').addEventListener('click',disp);
  document.getElementById('Homes').addEventListener('click',disp);
  document.getElementById('Senior-Citizen').addEventListener('click',disp);
  document.getElementById('Health').addEventListener('click',disp);
  }
  function fetchall(){
    location.reload();
    firebase.database().ref('Yojanas').once("value").then(function(snapshot) {
        snapshot.forEach(
        function(ChildSnapshot){
          var name=ChildSnapshot.val().name;
          var id=ChildSnapshot.val().id;
          var domain=ChildSnapshot.val().domain;
          var desc=ChildSnapshot.val().description;
          var video=ChildSnapshot.val().video;
          var img=ChildSnapshot.val().image;
          var elig=ChildSnapshot.val().eligibility;
          var disabled=ChildSnapshot.val().disabled;
          if(disabled=="no"){
          addi(name,domain,desc,video,img,id,cnt);
          cnt++;
        }
      }
      );
    });
  }
document.getElementById('searchBar').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const searchString = document.getElementById('searchBar').value.toLowerCase();
    const filteredYojanas=new Array();
    for(var i=0;i<yojanas.length;i++){
      if(yojanas[i].toLowerCase().includes(searchString)){
        filteredYojanas.push(yojanas[i]);
      }
    }
  displayYojanas(filteredYojanas);
  }
  
});

  function displayYojanas(filteredYojanas){
    var cnt=0;
    console.log('filteredYojanas');
    document.getElementById('list').innerHTML='';
    var ref = firebase.database().ref("Yojanas");
      firebase.database().ref('Yojanas').once("value").then(function(snapshot) {
        snapshot.forEach(
        function(ChildSnapshot){
          var name=ChildSnapshot.val().name;
          var id=ChildSnapshot.val().id;
          var domain=ChildSnapshot.val().domain;
          var desc=ChildSnapshot.val().description;
          var video=ChildSnapshot.val().video;
          var img=ChildSnapshot.val().image;
          var elig=ChildSnapshot.val().eligibility;
          if(filteredYojanas.includes(name)){
          addi(name,domain,desc,video,img,id,cnt);
          cnt++;
        }
        }
      );
    });
  }

   window.addEventListener('load', fetch);

