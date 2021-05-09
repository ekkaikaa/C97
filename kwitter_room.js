var firebaseConfig = {
      apiKey: "AIzaSyAaAW4z8aNeFY4zzPDb0gUvgh30IAMNfM8",
      authDomain: "kwitter-2-a7a96.firebaseapp.com",
      databaseURL: "https://kwitter-2-a7a96-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-a7a96",
      storageBucket: "kwitter-2-a7a96.appspot.com",
      messagingSenderId: "395450609075",
      appId: "1:395450609075:web:a381e9dd33d8422bbdafc6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - " + Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick='redircttoroomname(this.id)'>" + Room_names + "</div> <hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redircttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html";
}

user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update( {
            purpose: "Adding roomname"
      })
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html";
}