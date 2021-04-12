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
document.getElementById('recommend').onclick=function(){
     if(user==null)
     {
       window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Signup/login.html");
      }
      else
      {
        window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Yojana/recommend.html");
      }
 };
 document.getElementById('applied').onclick=function()
 {
  if(user==null)
  {
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Signup/login.html");
  }
  else
  {
    window.location.replace("file://C:/Users/Yashvi/Desktop/Sah-Yojana/Check Status/check_status.html");
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
              'description': 'Ambavadi, Ahmedabad'
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
              'description': 'Grant Road, Mumbai'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [77.08190, 28.63881]
            },
            'properties': {
              'title': 'Delhi Officers Administration',
              'description': 'Tilak Nagar, Delhi'
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
              'description': 'Mysore, Karnataka'
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
              'description': 'Jaiselmer, Rajasthan'
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
              'description': 'Bamnai, Madhya Pradesh'
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
              'description': 'Jind, Haryana'
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
              'description': 'Nagla Bari, Uttar Pradesh'
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
              'description': 'Siddipet, Telangana'
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
              'description': 'Guntur, Andhra Pradesh'
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
              'description': 'Umerkote, Odisha'
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
              'description': 'Raipur, Chattisgarh'
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
              'description': 'Dhanbad, Jharkhand'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [88.39397, 22.58336]
            },
            'properties': {
              'title': 'Govt. Office',
              'description': 'Kolkata, West Bengal'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [80.23214, 13.01767]
            },
            'properties': {
              'title': 'Government of Tamil Nadu',
              'description': 'Chennai, Tamil Nadu'
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
              'description': 'Guwahati, Assam'
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
                  '</p>'
              )
          )
          .addTo(map);
      });
    