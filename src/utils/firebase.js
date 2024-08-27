// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEYW3MSOGTE8yxawagmHGGzHcb4ovXlBc",
  authDomain: "netflix-gpt-25580.firebaseapp.com",
  projectId: "netflix-gpt-25580",
  storageBucket: "netflix-gpt-25580.appspot.com",
  messagingSenderId: "11884661373",
  appId: "1:11884661373:web:e7016f32c93276fa307f14",
  measurementId: "G-BL8Q8HNK5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
