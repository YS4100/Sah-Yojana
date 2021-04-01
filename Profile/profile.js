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
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Profile/profile.html");
 }
};
})

function submit()
{
  firebase.auth().onAuthStateChanged(user => {
    if(user)
    {
      var user = firebase.auth().currentUser.uid;
      var age = document.getElementById('age').value;
      var gender = document.getElementById('gender'),value;
      var address = document.getElementById('address').value;
      var city = document.getElementById('city').value;
      var state = document.getElementById('state').value;
      var country = document.getElementById('country').value;
      var caste = document.getElementById('caste').value;
      var annualincome = document.getElementById('annualincome').value;
      var bpl = document.getElementById('bpl').value;
      var occupation = document.getElementById('occupation').value;
      if(occupation=='farmer')
      {
        var land = document.getElementById('land').value;
        var scale = document.getElementById('scale').value;
        firebase.database().ref('Users/' + user).update({
          age : age,
          gender :  gender,
          address : address,
          city : city,
          state : state,
          country : country,
          caste : caste,
          annualincome : annualincome,
          bpl : bpl,
          occupation : occupation,
          hectaresofland : land,
          scaleoffarming : scale
        });
      }
      else if(occupation == 'student')
      {
        var qualification = document.getElementById('qualification').value;
        if(qualification=='school')
        {
          var std = document.getElementById('std').value;
          var type = document.getElementById('type').value;
          firebase.database().ref('Users/' + user).update({
          age : age,
          gender :  gender,
          address : address,
          city : city,
          state : state,
          country : country,
          caste : caste,
          annualincome : annualincome,
          bpl : bpl,
          occupation : occupation,
          qualification: qualification,
          standard: std,
          typeofschool:type
        });
        }
        else if(qualification=='diploma')
        {
          var diplomayear=document.getElementById('diplomayear').value;
          var diplomabranch=document.getElementById('diplomabranch').value;
          firebase.database().ref('Users/' + user).update({
          age : age,
          gender :  gender,
          address : address,
          city : city,
          state : state,
          country : country,
          caste : caste,
          annualincome : annualincome,
          bpl : bpl,
          occupation : occupation,
          qualification: qualification,
          year: diplomayear,
          branch:diplomabranch
        });
        }
        else if(qualification=='undergraduate')
        {
          var undergraduatedegree=document.getElementById('undergraduatedegree').value;
          var undergraduatebranch=document.getElementById('undergraduatebranch').value;
          var undergraduateyear=document.getElementById('undergraduateyear').value;
          firebase.database().ref('Users/' + user).update({
          age : age,
          gender :  gender,
          address : address,
          city : city,
          state : state,
          country : country,
          caste : caste,
          annualincome : annualincome,
          bpl : bpl,
          occupation : occupation,
          qualification: qualification,
          degree: undergraduatedegree,
          branch: undergraduatebranch,
          year: undergraduateyear
        });
        }
        else if(qualification=='graduate')
        {
          var graduatedegree=document.getElementById('graduatedegree').value;
          var graduatebranch=document.getElementById('graduatebranch').value;
          var graduateyear=document.getElementById('graduateyear').value;
          firebase.database().ref('Users/' + user).update({
          age : age,
          gender :  gender,
          address : address,
          city : city,
          state : state,
          country : country,
          caste : caste,
          annualincome : annualincome,
          bpl : bpl,
          occupation : occupation,
          qualification: qualification,
          degree: graduatedegree,
          branch: graduatebranch,
          year: graduateyear
        });
        }
        else if(qualification=='phd')
        {
          var phdbranch=document.getElementById('phdbranch').value;
          
          firebase.database().ref('Users/' + user).update({
          age : age,
          gender :  gender,
          address : address,
          city : city,
          state : state,
          country : country,
          caste : caste,
          annualincome : annualincome,
          bpl : bpl,
          occupation : occupation,
          qualification: qualification,
          branch: phdbranch
        });
        }
      }
      else if(qualification=='job'){
        var company= document.getElementById('companyjob').value;
        var typecompany= document.getElementById('typecompany').value;
        firebase.database().ref('Users/' + user).update({
          age : age,
          gender :  gender,
          address : address,
          city : city,
          state : state,
          country : country,
          caste : caste,
          annualincome : annualincome,
          bpl : bpl,
          occupation : occupation,
          qualification: qualification,
          company: company,
          typeofcompany:typecompany
      });
    }

    else if(qualification=='retired'){
        var pension= document.getElementById('pension').value;
        firebase.database().ref('Users/' + user).update({
          age : age,
          gender :  gender,
          address : address,
          city : city,
          state : state,
          country : country,
          caste : caste,
          annualincome : annualincome,
          bpl : bpl,
          occupation : occupation,
          qualification: qualification,
          pensioned: pension
      });
    }

    else if(qualification=='labourer'){
        var companylab= document.getElementById('companylab').value;
        var typejob= document.getElementById('typejob').value;
        firebase.database().ref('Users/' + user).update({
          age : age,
          gender :  gender,
          address : address,
          city : city,
          state : state,
          country : country,
          caste : caste,
          annualincome : annualincome,
          bpl : bpl,
          occupation : occupation,
          qualification: qualification,
          employedat: companylab,
          typeofjob: typejob
      });
    }

    else if(qualification=='business'){
        var details= document.getElementById('businessdetails').value;
        var partner= document.getElementById('partnership').value;
        firebase.database().ref('Users/' + user).update({
          age : age,
          gender :  gender,
          address : address,
          city : city,
          state : state,
          country : country,
          caste : caste,
          annualincome : annualincome,
          bpl : bpl,
          occupation : occupation,
          qualification: qualification,
          details: details,
          partnership: partner
      });
    }
  }
});
}