import firebase from 'firebase'
import firestore from 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyADH9Jno0fAfFFIkqoFPHpGijCQQvVx_Oo",
    authDomain: "restaurant-app-project-247210.firebaseapp.com",
    databaseURL: "https://restaurant-app-project-247210.firebaseio.com",
    projectId: "restaurant-app-project-247210",
    storageBucket: "restaurant-app-project-247210.appspot.com",
    messagingSenderId: "479039521985",
    appId: "1:479039521985:web:0419888f0bd7c8c7"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebaseApp.firestore().settings({timestampsInSnapshots: true})

  export default firebaseApp.firestore()