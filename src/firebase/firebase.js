
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
 import {getFirestore} from "firebase/firestore";
 import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAmUYsZP4VCSz4K-CTH9liU7qT-vwWheeM",
  authDomain: "insta-clone-f9e68.firebaseapp.com",
  projectId: "insta-clone-f9e68",
  storageBucket: "insta-clone-f9e68.appspot.com",
  messagingSenderId: "56555580730",
  appId: "1:56555580730:web:61099dd5941b103f517403",
  measurementId: "G-HHX04SJXY9"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const firestore=getFirestore(app);
const storage=getStorage(app);

export {app,auth,firestore,storage};