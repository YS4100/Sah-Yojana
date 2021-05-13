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
  
  function fetch(){
    var active_yojanas=0;
    var disabled_yojanas=0;
    var agri_yojanas=0;
    var health_yojanas=0;
    var edu_yojanas=0;
    var socwelf_yojanas=0;
    var homes_yojanas=0;
    var senior_yojanas=0;

    firebase.database().ref('Yojanas').once("value").then(function(snapshot){
       snapshot.forEach(
          function(ChildSnapshot){
            var domain=ChildSnapshot.val().domain;
            var disabled=ChildSnapshot.val().disabled;
            if(disabled=='no'){
              active_yojanas++;
              if(domain=='Agriculture'){
                agri_yojanas++;
              }
              else if(domain=='Health'){
                health_yojanas++;
              }
              else if(domain=='Education'){
                edu_yojanas++;
              }
              else if(domain=='Social-Welfare'){
                socwelf_yojanas++;
              }
              else if(domain=='Homes'){
                homes_yojanas++;
              }
              else if(domain=='Senior-Citizen'){
                senior_yojanas++;
              }
            }
          else{
            disabled_yojanas++;
          }
        });
       document.getElementById('active_yojanas').innerHTML=`Active Yojanas : ${active_yojanas}<hr>`;
        document.getElementById('disabled_yojanas').innerHTML=`Inactive Yojanas : ${disabled_yojanas}`;
        document.getElementById('agri').innerHTML=`Agriculture : ${agri_yojanas}`;
        document.getElementById('senior').innerHTML=`Senior-Citizens : ${senior_yojanas}`;
        document.getElementById('homes').innerHTML=`Homes : ${homes_yojanas}`;
        document.getElementById('soc').innerHTML=`Social-Welfare : ${socwelf_yojanas}`;
        document.getElementById('edu').innerHTML=`Education : ${edu_yojanas}`;
        document.getElementById('health').innerHTML=`Health : ${health_yojanas}`;

     });

    var total_users=0;
    var active_users=0;
    firebase.database().ref('Users').once("value").then(function(snapshot){
       snapshot.forEach(
          function(ChildSnapshot){
            //console.log('hi');
            total_users++;
            var isOnline=ChildSnapshot.val().isOnline;
            if(isOnline=="yes"){
              active_users++;
            }
            document.getElementById('total_users').innerHTML=`Total Users : ${total_users-1}<hr>`;
            document.getElementById('active_users').innerHTML=`Active Users : ${active_users}`;
          });
     });
    //console.log(total_users);
    

    

    var reff=firebase.database().ref('Users/ADfh8gMpbyen3AAEF6AkNBy1D1j1');
          reff.once("value").then(function(snapshot){
            var complaints=snapshot.val().complaints;
            var resolved_complaints=snapshot.val().resolved;
            document.getElementById('total_cmp').innerHTML=`Total Complaints : ${complaints}<hr>`;
            document.getElementById('resolved_cmp').innerHTML=`Resolved Complaints : ${resolved_complaints}`;
          });

    
}

window.saveFile = function saveFile() {
    firebase.database().ref('Yojanas').once("value").then(function(snapshot){
      var data=[];
       snapshot.forEach(
          function(ChildSnapshot){
            
            var name=ChildSnapshot.val().name;
            var applied=ChildSnapshot.val().applied;
            var bookmarked=ChildSnapshot.val().bookmarked;
            var domain=ChildSnapshot.val().domain;
            var obj={};
            obj.Name=name;
            obj.Domain=domain;
            obj.Applied_Users=applied;
            obj.Bookmarked_Users=bookmarked;
            //console.log(obj);
            data.push(obj);
            //console.log(data);
          });
          var opts = [{
          sheetid: 'Sheet One',
          header: true
          }];
          var result = alasql('SELECT * INTO XLSX("Yojana_Report.xlsx",?) FROM ?',
          [opts, [data]]);
          });  
}

function func(){
  window.location.href='https://docs.google.com/spreadsheets/d/1yFIoVaQaCdrYCHdneUICcymtU2waDIMYy_KVG9Ns6SA/edit?usp=sharing';
}

  window.addEventListener('load',fetch);