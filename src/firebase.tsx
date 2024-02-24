
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTk8byuONUFYUBD3JHwmAnfBrLmjakv6Y",
  authDomain: "financeapp-285fe.firebaseapp.com",
  projectId: "financeapp-285fe",
  storageBucket: "financeapp-285fe.appspot.com",
  messagingSenderId: "585298075443",
  appId: "1:585298075443:web:82ee5b8fda7d0f6ba22846",
  measurementId: "G-NSNT394592"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, signInWithEmailAndPassword };
