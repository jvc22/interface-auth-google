import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDv2pDvZfvBNvZKsdeLTRNxstWDP1fyzE8",
  authDomain: "auth-react-explorer.firebaseapp.com",
  projectId: "auth-react-explorer",
  storageBucket: "auth-react-explorer.appspot.com",
  messagingSenderId: "856449671224",
  appId: "1:856449671224:web:809ab23962d9206c3f86cd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);