//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBS6fbbCwYa1u09825jzTI94n5FRHH6Ja4",
      authDomain: "c-96-1365f.firebaseapp.com",
      databaseURL: "https://c-96-1365f-default-rtdb.firebaseio.com",
      projectId: "c-96-1365f",
      storageBucket: "c-96-1365f.appspot.com",
      messagingSenderId: "32753435222",
      appId: "1:32753435222:web:77f5b392eb10788040f1f7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name")
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
document.getElementById("msg").value = "";
}


//End code
      } });  }); }
getData();
