import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


    const firebaseConfig = {
      apiKey: "AIzaSyCSdqbHdgJ2FaF6XSKLpu04pp-MqLgj0ew",
      authDomain: "reminder-f9d0b.firebaseapp.com",
      databaseURL: "https://reminder-f9d0b-default-rtdb.firebaseio.com",
      projectId: "reminder-f9d0b",
      storageBucket: "reminder-f9d0b.appspot.com",
      messagingSenderId: "23123697616",
      appId: "1:23123697616:web:55e2452c6166128f31e3d5"
    };
  
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


document.getElementById('reg-btn').addEventListener('click',function(){
    document.getElementById('register-div').style.display ="inline";
    document.getElementById('login-div').style.display ="none";
});

document.getElementById('log-btn').addEventListener('click',function(){
    document.getElementById('register-div').style.display ="none";
    document.getElementById('login-div').style.display ="inline";
});



document.getElementById("login-btn").addEventListener('click',function(){

    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;


    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    document.getElementById("result-box").style.display ="inline";
    document.getElementById('login-div').style.display ="none";
    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login succefully";
    location.assign("/home.html");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    document.getElementById("result-box").style.display ="inline";
    document.getElementById('login-div').style.display ="none";
    document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;
  });

});

  document.getElementById("register-btn").addEventListener('click',function(){

    const registerEmail = document.getElementById("register-email").value;
    const registerPassword = document.getElementById("register-password").value;


    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    document.getElementById("result-box").style.display ="inline";
    document.getElementById('register-div').style.display ="none";
    document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+"was register succefully";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    document.getElementById("result-box").style.display ="inline";
    document.getElementById('register-div').style.display ="none";
    document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;

  });

});

document.getElementById("log-out-btn").addEventListener('click',function(){

    signOut(auth).then(() => {
        document.getElementById("result-box").style.display ="none";
        document.getElementById('login-div').style.display ="inline";

      }).catch((error) => {
        document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;
      });

});