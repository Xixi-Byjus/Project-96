const firebaseConfig = {
    apiKey: "AIzaSyDXZZxo0nf2dItSyTlr1XbPPE0M4qmmzQg",
    authDomain: "project-94-85b45.firebaseapp.com",
    databaseURL: "https://project-94-85b45-default-rtdb.firebaseio.com",
    projectId: "project-94-85b45",
    storageBucket: "project-94-85b45.appspot.com",
    messagingSenderId: "32288015639",
    appId: "1:32288015639:web:c486e43c0b8d15baa5e352"
  };
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

    
   //Start code
   console.log("Room_names"+Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML +=row;
   //End code
   });});}
