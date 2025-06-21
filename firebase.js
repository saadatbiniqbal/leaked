import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: "AIzaSyBfjWjNDtn9wppGGMZo94_a6iHq_eAZP_0",
  authDomain: "black-etheum.firebaseapp.com",
  databaseURL: "https://black-etheum-default-rtdb.firebaseio.com",
  projectId: "black-etheum",
  storageBucket: "black-etheum.firebasestorage.app",
  messagingSenderId: "455914516470",
  appId: "1:455914516470:web:70730631efa5d0b265a1d7",
  measurementId: "G-32708WH7DR"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
