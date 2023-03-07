import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance


var firebaseConfig = {
  apiKey: "AIzaSyBd9GLF-wHd8qNhwLwie8K2xcvlfCQgeyY",
  authDomain: "todo-list-5ae18.firebaseapp.com",
  projectId: "todo-list-5ae18",
  storageBucket: "todo-list-5ae18.appspot.com",
  messagingSenderId: "345959524350",
  appId: "1:345959524350:web:72aa443ee856e13fb602af"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
