import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByliYMlYENCynCyAwDI9Rj6XwEwJEUsnM",
  authDomain: "twitter-clone-840aa.firebaseapp.com",
  databaseURL: "https://twitter-clone-840aa.firebaseio.com",
  projectId: "twitter-clone-840aa",
  storageBucket: "twitter-clone-840aa.appspot.com",
  messagingSenderId: "847396480549",
  appId: "1:847396480549:web:17844748b9df60460181cc",
  measurementId: "G-1SK0SZVMWQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
