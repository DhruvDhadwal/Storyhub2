import firebase from 'firebase';
require('@firebase/firestore');

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyB-znpOtLfnmJZ3TPzvlOIB_f8vnTgFH-w",
  authDomain: "storyhub-b1544.firebaseapp.com",
  databaseURL: "https://storyhub-b1544-default-rtdb.firebaseio.com",
  projectId: "storyhub-b1544",
  storageBucket: "storyhub-b1544.appspot.com",
  messagingSenderId: "644704630054",
  appId: "1:644704630054:web:680c16c3d1bdd89cc1fde7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();