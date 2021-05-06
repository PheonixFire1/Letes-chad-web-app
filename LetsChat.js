function loginClick()
{
 var username=document.getElementById("username").value;
 localStorage.setItem("username",username);
 window.location="LetsChat_room.html";
}