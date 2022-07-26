var firebaseConfig = {
    apiKey: "AIzaSyB-DMdZ3B1k97kTaA7OFmGaOPEUNUNUWsw",
    authDomain: "practiceactivity-7eed8.firebaseapp.com",
    databaseURL: "https://practiceactivity-7eed8-default-rtdb.firebaseio.com",
    projectId: "practiceactivity-7eed8",
    storageBucket: "practiceactivity-7eed8.appspot.com",
    messagingSenderId: "5620736632",
    appId: "1:5620736632:web:2a97478d087fda2b57c38d",
    measurementId: "G-79H3K83KKS"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("username").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }