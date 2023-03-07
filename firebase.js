import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2rf0tWVDRAKzgrfKnoyjqV-oqkVPGHMk",
  authDomain: "signal-clone-subrata.firebaseapp.com",
  projectId: "signal-clone-subrata",
  storageBucket: "signal-clone-subrata.appspot.com",
  messagingSenderId: "1028334267171",
  appId: "1:1028334267171:web:6e1dd9486624815e523a96",
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { db, auth, storage };
