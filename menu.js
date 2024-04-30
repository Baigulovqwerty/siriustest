import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
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
const analytics = getAnalytics(app);
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";


const db = getDatabase();
const countofpeople = ref(db, 'countofpeople/' + '');
onValue(countofpeople, (snapshot) => {
    alert(snapshot.val());
});