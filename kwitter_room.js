
  var firebaseConfig = {
    apiKey: "AIzaSyDhRNo_GMl1uIs1cUVr05yi0QC7ZqV6_mQ",
    authDomain: "kwitter-2f8c5.firebaseapp.com",
    databaseURL: "https://kwitter-2f8c5.firebaseio.com",
    projectId: "kwitter-2f8c5",
    storageBucket: "kwitter-2f8c5.appspot.com",
    messagingSenderId: "742079310947",
    appId: "1:742079310947:web:f2dcf3733a33743fc31c56"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   room_name=childKey;
   console.log(room_name);
   var row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();
function logout(){
    localStorage.removeItem("user_name");
    window.location="index.html";
    localStorage.removeItem("room_name")


   
}
var username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+ " "+ username +   "!";

   function addRoom(){
var room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
   purpose: "Adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
console.log(room_name);

}
function redirectToRoomName(name){
   console.log(name)
   localStorage.setItem("room_name", name);
   window.location="kwitter_page.html";
}
