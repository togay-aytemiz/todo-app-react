// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfGRRyu9-gFE8DnENO8OeQdKVLAfYc9ds",
  authDomain: "todo-react-e1238.firebaseapp.com",
  projectId: "todo-react-e1238",
  storageBucket: "todo-react-e1238.appspot.com",
  messagingSenderId: "444776311347",
  appId: "1:444776311347:web:0d398430d216b408105146",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
