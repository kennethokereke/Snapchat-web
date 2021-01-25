import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAc77rYhafLSykRTfNZKViPdvQpF4N3Lnw",
    authDomain: "snapchat-cf030.firebaseapp.com",
    projectId: "snapchat-cf030",
    storageBucket: "snapchat-cf030.appspot.com",
    messagingSenderId: "575956445360",
    appId: "1:575956445360:web:3bf91b81fef8520685b375",
    measurementId: "G-JT4GCPV0ZR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, storage, provider};

