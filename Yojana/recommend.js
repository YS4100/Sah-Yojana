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
//agelow,agehigh,incomelow,incomehigh,bpl,gender,caste,occupation,qualification,std


function check(criteria,userid,name,domain,desc,video,img,id,cnt){
    var cntyj=0;
    var flag=false;
    var ref=firebase.database().ref('Users/'+userid);
    ref.once("value").then(function(snapshot) {
    var age=snapshot.val().age;
    var income=snapshot.val().annualincome;
    var bpl=snapshot.val().bpl;
    var gender=snapshot.val().gender;
    var caste=snapshot.val().caste;
    var occ=snapshot.val().occupation;
    age=parseInt(age);
    income=parseInt(income);
    std=parseInt(std);
    for(var i=0;i<criteria.length;i++){
      var compare=criteria[i].split("=");
      if(compare[0]=="agelow"){
        if(age>=parseInt(compare[1])){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="agehigh"){
        if(age<=parseInt(compare[1])){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="incomelow"){
        if(income>=parseInt(compare[1])){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="incomehigh"){
        if(income<=parseInt(compare[1])){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="bpl"){
        if(bpl.localeCompare(compare[1])==0){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="gender"){
        if(gender.localeCompare(compare[1])==0){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="caste"){
        if(caste.localeCompare(compare[1])==0){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="occupation"){
        if(occ.localeCompare(compare[1])==0){
          cntyj=cntyj+1;
        }
      }
      else if(occ=="student" && compare[0]=="qualification"){
        var qual=snapshot.val().qualification;
        //console.log('hi');
        if(qual.localeCompare(compare[1])==0){
          cntyj=cntyj+1;
        }
      }
      else if(occ=="student" && snapshot.val().qualification=="school" && compare[0]=="std"){
        var std=snapshot.val().standard;
        if(std==parseInt(compare[1])){
          //console.log("hi");
          cntyj=cntyj+1;
        }
      }
    if(cntyj==criteria.length){
      addi(name,domain,desc,video,img,id,cnt);
      return true;
      }
    }
  });  
}

function fetch(){
  var cnt=0;
  firebase.auth().onAuthStateChanged(user => {
    if(user){
      var userid=firebase.auth().currentUser.uid;
      //console.log(id);
      firebase.database().ref('Yojanas/').once("value").then(function(snapshot) {
        snapshot.forEach(
        function(ChildSnapshot){
          var name=ChildSnapshot.val().name;
          var id=ChildSnapshot.val().id;
          var domain=ChildSnapshot.val().domain;
          var desc=ChildSnapshot.val().description;
          var video=ChildSnapshot.val().video;
          var img=ChildSnapshot.val().image;
          var criteria=ChildSnapshot.val().criteria;
          var crit = criteria.split(",");
          var disabled=ChildSnapshot.val().disabled;
          if(check(crit,userid,name,domain,desc,video,img,id,cnt)==true && disabled=="no")
          {
            cnt++;
          }
        }
      );
      
    });
    }
});
}


window.addEventListener('load', fetch);