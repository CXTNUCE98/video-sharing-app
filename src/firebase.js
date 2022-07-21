import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBlD0rw7Km8i_4DQswT3MF-GAru6Jv7RM",
  authDomain: "video-sharing-app-e9974.firebaseapp.com",
  projectId: "video-sharing-app-e9974",
  storageBucket: "video-sharing-app-e9974.appspot.com",
  messagingSenderId: "710067870256",
  appId: "1:710067870256:web:847e562374efd0ed7cabf5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;