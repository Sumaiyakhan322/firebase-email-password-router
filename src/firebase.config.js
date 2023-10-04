// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx_Asw0hDVE9siT2ie90klkFlTa5ZCG4Y",
  authDomain: "auth-integration-22d90.firebaseapp.com",
  projectId: "auth-integration-22d90",
  storageBucket: "auth-integration-22d90.appspot.com",
  messagingSenderId: "917037747929",
  appId: "1:917037747929:web:b76bdc6a12c2385774f8c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;