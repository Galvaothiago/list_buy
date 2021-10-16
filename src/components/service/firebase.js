import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDjBhJ6IrwdfcyrsDxaMYVTBFNRCHW_zCw",
    authDomain: "todo-buy.firebaseapp.com",
    projectId: "todo-buy",
    storageBucket: "todo-buy.appspot.com",
    messagingSenderId: "542688806955",
    appId: "1:542688806955:web:7ba4fc72902909dbce426e",
    measurementId: "G-EZP09J906G"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  const provider= new firebase.auth.GoogleAuthProvider()
  firebase.analytics();

  export default db
  export { auth, provider }