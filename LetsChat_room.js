//Firebase links start here
var firebaseConfig = {
    apiKey: "AIzaSyD9B_C-DmxfvSp0Y2_9kZZr4nG1RHE3PGc",
    authDomain: "letschat-webapp-483be.firebaseapp.com",
    databaseURL: "https://letschat-webapp-483be-default-rtdb.firebaseio.com",
    projectId: "letschat-webapp-483be",
    storageBucket: "letschat-webapp-483be.appspot.com",
    messagingSenderId: "815529822368",
    appId: "1:815529822368:web:3bedf604955d08282121c5"
  };
  firebase.initializeApp(firebaseConfig);
  //Firebase links stop here

  username=localStorage.getItem("username");
  document.getElementById("displayName").innerHTML="Welcome "+username;

  function AddRoom()
  {
        room=document.getElementById("roomName").value;
        firebase.database().ref("/").child(room).update({
              purpose:"adding room name"
        });
        localStorage.setItem("roomName",room);
        window.location="LetsChat_page.html";
  }
 
    function getData() 
    {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     row="<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
    });});}
getData();

    function redirect_to_room_name(name)
    {
          localStorage.setItem("roomName",name);
          window.location="LetsChat_page.html"
    }

    function logout()
    {
          localStorage.removeItem("username");
          localStorage.removeItem("roomName");
          window.location=("index.html");
    }
    