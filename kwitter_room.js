// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCdeZkOxu62LJxCcMPhemh3iRuX0QLAHbo",
      authDomain: "kwitter2-7a8cf.firebaseapp.com",
      databaseURL: "https://kwitter2-7a8cf-default-rtdb.firebaseio.com",
      projectId: "kwitter2-7a8cf",
      storageBucket: "kwitter2-7a8cf.appspot.com",
      messagingSenderId: "381916072553",
      appId: "1:381916072553:web:0fdcb7a1ef4b64c72730f8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}

