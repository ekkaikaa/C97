function adduser() {
 user_name = document.getElementById("name_u").value;
 localStorage.setItem("user_name", user_name);
 window.location = "kwitter_room.html";
 
}