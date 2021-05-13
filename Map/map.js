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
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoeW9qYW5hIiwiYSI6ImNrbjQ3NmE2bzA0Mncydm9menh5ODBmdmoifQ.6m6uQrelwh7rR35GQRAElg';
/*var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});
*/

      var geojson = {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [72.54380, 23.03031]
            },
            'properties': {
              'title': 'PWD Office',
              'description': 'Aam Aadmi Bima Yojana',
              'office': '2nd Ln, Panchavati Society, Gulbai Tekra, Ahmedabad, Gujarat 380015'
            }
          },
           {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [72.65718,23.22150]
            },
            'properties': {
              'title': 'New Sachivalay',
              'description': 'Pradhan Mantri Kisaan Maandhan Yojana',
              'office': 'Agriculture, Farmers Welfare and Co-operation Department, Block No. 5, First floor,New Sachivalaya ,Gandhinagar, Gujarat'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [72.84153, 19.0727]
            },
            'properties': {
              'title': 'Municipal Office',
              'description': 'Doodh Sanjeevani Yojana',
              'office': 'Grant Road (W), Nana Chowk, Mumbai, Maharashtra 400007'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [77.21498, 28.61124]
            },
            'properties': {
              'title': 'Nirman Bhawan',
              'description': 'Pradhan Mantri Awas Yojana',
              'office': 'Rajpath Area, Central Secretariat, New Delhi, Delhi 110001'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [76.64357, 12.30399]
            },
            'properties': {
              'title': 'District Registrar Office',
              'description': 'Indira Gandhi Old Age Pension Scheme',
              'office' : 'Sunnadakeri, Rahmania Mohalla, Mysuru, Karnataka 570004'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [70.93312, 27.1826]
            },
            'properties': {
              'title': 'Rajasthan Government Office',
              'description': 'Manav Kalyan Yojana',
              'office' : 'Suthar Para, Jaisalmer, Rajasthan 345001'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [77.51153, 22.99201]
            },
            'properties': {
              'title': 'Government Office',
              'description': 'Sarasati Sadhana Yojana',
              'office': 'Bamnai, Madhya Pradesh 464990'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [76.28467, 29.61251]
            },
            'properties': {
              'title': 'Haryana Office',
              'description': 'Shravan Tirthdarshan Yojana',
              'office' : 'Old Court Road, Jind, Haryana 126110, Rani Talab, Jind, Haryana 126102'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [78.41165, 27.36262]
            },
            'properties': {
              'title': 'Tahsildar Office',
              'description': 'Government Hostel Scheme',
              'office': 'Nagla Bari, Uttar Pradesh 283111'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [78.85238, 18.1493]
            },
            'properties': {
              'title': 'Government Office',
              'description': 'Swasthya Bima Yojana',
              'office': '11-4-85, Bharath Nagar, Siddipet, Telangana 502103'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [80.4627, 16.51785]
            },
            'properties': {
              'title': 'AP Government Office',
              'description': 'Namo E Tabs Scheme',
              'office': 'Brodipet, Guntur, Andhra Pradesh'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [80.40627, 16.51785]
            },
            'properties': {
              'title': 'PWD Office',
              'description': 'Manav Kalyan Yojana',
              'office' : 'Umerkote, Odisha 764073'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [80.61947, 21.33583]
            },
            'properties': {
              'title': 'Divisional Office',
              'description': 'Senior Citizens Saving Scheme',
               'office': 'Main Rd, Janta Colony, Raipur, Chhattisgarh 492001'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [86.48362, 23.97264]
            },
            'properties': {
              'title': 'Jharkhand Sarkar Karyalaya',
              'description': 'Pandey Muhalla, Dhanbad, Jharkhand 826001',
              'office': 'Manav Kalyan Yojana'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [88.39397, 22.58336]
            },
            'properties': {
              'title': 'Goverment Of West Bengal Office Of The Joint Director',
              'description': 'Education Loan Interest Subsidy Scheme',
              'office': 'No.55/6A, Bibhuti Bandyopadhyay Sarani Rd, Palm Ave, Ballygunge Park, Ballygunge, Kolkata, West Bengal 700019'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [80.23214, 13.01767]
            },
            'properties': {
              'title': 'Tamil Development Department',
              'description': 'Suryashakti Kisan Yojana',
              'office': 'Egmore, Chennai, Tamil Nadu 600008'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [91.78777, 26.22157]
            },
            'properties': {
              'title': 'Janta Bhawan',
              'description': 'Pradhan Mantri Fasal Bima Yojana',
              'office': 'Secretariat Rd, Dispur, Guwahati, Assam 781006'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [72.53839, 23.05410]
            },
            'properties': {
              'title': 'Land Registry Office',
              'description': 'Gujarat Masiha Housing Scheme',
              'office' : ' Memnagar, Ahmedabad, Gujarat 380052'
            }
          },

        ]
      };

      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [78.9629, 20.5937],
        zoom: 4
      });

      // add markers to map
      geojson.features.forEach(function (marker) {
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(
                '<h3>' +
                  marker.properties.title +
                  '</h3><p>' +
                  marker.properties.description +
                  '</p><p>' + 
                  marker.properties.office + 
                  '</p>'
              )
          )
          .addTo(map);
      });
    