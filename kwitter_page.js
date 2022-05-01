// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDqTqyS9Tjw-9f3Y7hRbnGBGN1P7MbiMFw",
      authDomain: "kwitter-room-b7ea3.firebaseapp.com",
      databaseURL: "https://kwitter-room-b7ea3-default-rtdb.firebaseio.com",
      projectId: "kwitter-room-b7ea3",
      storageBucket: "kwitter-room-b7ea3.appspot.com",
      messagingSenderId: "562849800753",
      appId: "1:562849800753:web:d69b1006740e5a7dc9ab10"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

//YOUR FIREBASE LINKS

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0 
      });
      document.getElementById("msg").value=" ";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
