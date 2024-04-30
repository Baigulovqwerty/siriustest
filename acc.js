import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";




const firebaseConfig = {
    apiKey: "AIzaSyA7O1oX_iH9QIZXFU9IRn9iO57g-f_n0uM",
    authDomain: "sirius-6b2b4.firebaseapp.com",
    databaseURL: "https://sirius-6b2b4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sirius-6b2b4",
    storageBucket: "sirius-6b2b4.appspot.com",
    messagingSenderId: "376848856283",
    appId: "1:376848856283:web:6f68500f23727b3ac2c8fe",
    measurementId: "G-FRYKTTYWRC"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider()



signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);


    console.log(errorCode, "oooo", errorMessage, email);
    // ...
  });







  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
    //   alert("you signed up");
      console.log(user.uid);
      console.log('sign up');
    } else {
      // User is signed out
      // ...
    //   alert("you not signed up");
    console.log('not sign up');
    }
  });