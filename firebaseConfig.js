import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAutREiyF_U34lLo0sg9YXVykuA-ZvfpyQ",
  authDomain: "docconnect-c0c78.firebaseapp.com",
  projectId: "docconnect-c0c78",
  storageBucket: "docconnect-c0c78.appspot.com",
  messagingSenderId: "752340175899",
  appId: "1:752340175899:web:257e6b177cb2f035e63cbe",
  databaseURL: "https://docconnect-c0c78-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { database, push, app };
export default auth;
