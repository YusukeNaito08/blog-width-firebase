
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider }from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDKLaLvc-CHAJ5VQVXAyRTl4uoEvttqyak",
  authDomain: "blog-31f3c.firebaseapp.com",
  projectId: "blog-31f3c",
  storageBucket: "blog-31f3c.appspot.com",
  messagingSenderId: "543754882228",
  appId: "1:543754882228:web:f309bcd72c6d9241291be1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }
