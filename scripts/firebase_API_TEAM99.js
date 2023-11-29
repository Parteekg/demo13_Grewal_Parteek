//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCMCulFteJWy-JshLTXBZki7ZzcdufvzNU",
    authDomain: "comp1800-demo-202330-1fca7.firebaseapp.com",
    projectId: "comp1800-demo-202330-1fca7",
    storageBucket: "comp1800-demo-202330-1fca7.appspot.com",
    messagingSenderId: "142389160091",
    appId: "1:142389160091:web:03b754c04f79553452be3e"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();