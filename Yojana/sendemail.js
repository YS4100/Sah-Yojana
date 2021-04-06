"use strict";
function reminder()
{
  firebase.auth().onAuthStateChanged(user => {
  if(user)
  {
    console.log('hii');
    var user = firebase.auth().currentUser.uid;
    var ref = firebase.database().ref('Users/' + user);
    ref.once("value").then(function(snapshot){
      var email = snapshot.val().email;
      //Schedule Mail
      var cmd=require('node-cmd');
      //var runsync = require["runsync"];
      const syncData=cmd.runSync('cd Desktop/Sah-Yojana/Yojana');
      cmd.run(`sendemail.js`,
          function(){
            var cron = require('node-cron');
            var nodemailer = require('nodemailer');
            var transporter = nodemailer.createTransport({
           service: 'gmail',
           auth: {
                   user: 'sahyojana@gmail.com',   //put your mail here
                   pass: 'aniketyashvi'              //password here
                 }
        });
        const mailOptions = { 
                      from: 'sahyojana@gmail.com',       
                      to: email,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                      subject: 'Meeting Reminder',  
                      html: '<p>Reminder !!!!</p>'// plain text body
        };
        cron.schedule('0 */1 * * * *', () => {
        transporter.sendMail(mailOptions, function (err, info) {
            if(err) 
              console.log(err);
            else
              console.log(info);
             });
        });
                }
            );

//var app = express(),
//Email schedules code comes here
//app.listen(8000);


   }); 

  }
   });

}
if (typeof window !== 'undefined') {
    window.myExtFunction = function() {
        return reminder();
    }
}