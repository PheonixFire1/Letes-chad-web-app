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

  userName=localStorage.getItem("username");
  roomName=localStorage.getItem("roomName");

  function send()
  {
      message=document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
          name:userName,
          message:message,
          like:0
      });
      document.getElementById("msg").value="";
  }

  function getData() 
  { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
    {
       firebase_message_id = childKey;
       message_data = childData;
       name1=message_data['name'];
       message1=message_data['message'];
       like1=message_data['like']; 
       name_tick="<h4>"+name1+"<img src='tick.png' class='user_tick'></h4>";
       message_tag="<h4 class='message_h4'>"+message1+"</h4>";
       like_button="<button id="+firebase_message_id+" class='btn btn-warning' value="+like1+" onclick='updateLike(this.id)'>";
       span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like1+"</span></button><hr>";
       row=name_tick+message_tag+like_button+span_tag;
       document.getElementById("output").innerHTML+=row;
    }});});
 }
 getData();

 function updateLike(message_id)
 {
     button_id=message_id;
     likes=document.getElementById(button_id).value;
     updatedLikes=Number(likes)+1;
     firebase.database().ref(roomName).child(message_id).update({
         like:updatedLikes
     });
 }

 function logout()
 {
       localStorage.removeItem("username");
       localStorage.removeItem("roomName");
       window.location=("index.html");
 }