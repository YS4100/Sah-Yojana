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
       window.location.href='../Signup/login.html';
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
//agelow,agehigh,incomelow,incomehigh,bpl,state(list),country(list),gender,caste,occupation(list),qualification(list),std,scale(list),land,degree(list),year
//pensioned,partnership,typeofcompany,typeofjob,typeofschool, area, ownhouse

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
    var state=snapshot.val().state;
    var country=snapshot.val().country;
    var area=snapshot.val().area;
    var ownhouse =snapshot.val().ownhouse;
    state=state.toLowerCase();
    country=country.toLowerCase();
    age=parseInt(age);
    income=parseInt(income);
    //console.log(occ);
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
       else if(compare[0]=="ownhouse"){
        if(ownhouse.localeCompare(compare[1])==0){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="area"){
        if(area.localeCompare(compare[1])==0){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="state"){
        var liststate=compare[1].split(",");
        if(liststate.includes(state)){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="country"){
        var listcountry=compare[1].split(",");
        if(listcountry.includes(country)){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="gender"){
        if(gender.localeCompare(compare[1])==0){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="caste"){
        var listcaste=compare[1].split(",");
        if(listcaste.includes(caste)){
          cntyj=cntyj+1;
        }
      }
      else if(compare[0]=="occupation"){
        //console.log('occ');
        var listocc=compare[1].split(",");
        if(listocc.includes(occ)){
          cntyj=cntyj+1;
        }
      }
      else if(occ=="student" && compare[0]=="qualification"){
        console.log('qual');
        var qual=snapshot.val().qualification;
        var listqual=compare[1].split(",");
        if(listqual.includes(qual)){
          cntyj=cntyj+1;
        }
      }
      else if(occ=="student" && compare[0]=="year"){
        console.log('year');
        var qual=snapshot.val().qualification;
        if(qual=="diploma" || qual=="undergraduate" || qual=="graduate"){
          var year=snapshot.val().year;
          var listyear=compare[1].split(",");
          if(listyear.includes(year)){
            cntyj=cntyj+1;
          }
        }
      }
      else if(occ=="student" && compare[0]=="degree"){
        console.log('degree');
        var qual=snapshot.val().qualification;
        if(qual=="diploma" || qual=="undergraduate" || qual=="graduate"){
          var degree=snapshot.val().degree;
          var listdegree=compare[1].split(",");
          if(listdegree.includes(degree)){
            cntyj=cntyj+1;
          }
        }
      }
      else if(occ=="farmer" && compare[0]=="land"){
        var land=snapshot.val().hectaresofland;
        land=parseInt(land);
        if(land<=parseInt(compare[1])){
          cntyj=cntyj+1;
        }
      }
      else if(occ=="farmer" && compare[0]=="scale"){
        var scale=snapshot.val().scaleoffarming;
        var listscale=compare[1].split(",");
        if(listscale.includes(scale)){
          cntyj=cntyj+1;
        }
      }
      else if(occ=="retired" && compare[0]=="pensioned"){
        var pensioned=snapshot.val().pensioned;
        if(pensioned.localeCompare(compare[1])==0){
          cntyj=cntyj+1;
        }
      }
      else if(occ=="business" && compare[0]=="partnership"){
        var partner=snapshot.val().partnership;
        if(partner.localeCompare(compare[1])==0){
          cntyj=cntyj+1;
        }
      }
      else if(occ=="job" && compare[0]=="typeofcompany"){
        var typeofcompany=snapshot.val().typeofcompany;
        if(typeofcompany.localeCompare(compare[1])==0){
          cntyj=cntyj+1;
        }
      }
      else if(occ=="labourer" && compare[0]=="typeofjob"){
        var typeofjob=snapshot.val().typeofjob;
        if(typeofjob.localeCompare(compare[1])==0){
          cntyj=cntyj+1;
        }
      }
      else if(occ=="student" && snapshot.val().qualification=="school" && compare[0]=="std"){
        console.log('std');
        var std=snapshot.val().standard;
        //std=parseInt(std);
        var liststd=compare[1].split(",");
        //console.log(std);
        if(liststd.includes(std)){
          cntyj=cntyj+1;
        }
      }
      else if(occ=="student" && snapshot.val().qualification=="school" && compare[0]=="typeofschool"){
        var type=snapshot.val().typeofschool;
        if(type==compare[1]){
          cntyj=cntyj+1;
        }
      }
      //console.log(cntyj);
    if(cntyj==criteria.length){
      addi(name,domain,desc,video,img,id,cnt);
      return true;
      }
    }
  });  
}

function fetch(){
    firebase.auth().onAuthStateChanged(user => {
    if(user){
   var user=firebase.auth().currentUser.uid;
    firebase.database().ref('Users/'+user).once("value").then(function(snapshot) {
      var complete=snapshot.val().completeprofile;
      if(complete=="yes"){
        var cnt=0;


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
          var crit = criteria.split(";");
          var disabled=ChildSnapshot.val().disabled;
          if(disabled=="no")
          {
            if(check(crit,userid,name,domain,desc,video,img,id,cnt)==true)
            cnt++;
          }
        }
      );
      
    });
  
      }
      else{
        window.location.href='../Profile/profile.html';
      }


  });
   }
});
}


window.addEventListener('load', fetch);