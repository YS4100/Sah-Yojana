
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
    _linkread.setAttribute('href','enable.html?'+id);
    _linkread.innerHTML="Enable";
    _read.append(_linkread);
    descrip.append(_name);
    descrip.append(_domain);
    descrip.append(_desc);
    descrip.append(_read);
    blog_card.append(descrip);
    ul.append(blog_card);
  }

  var cnt=0;
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
          if(disabled=="yes"){
          addi(name,domain,desc,video,img,id,cnt);
          cnt++;
        }
        }
      );
    });
}




   window.addEventListener('load', fetch);