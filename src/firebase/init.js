// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBhbhKSz1__TyjFUNfNeq_fI2eTUdZHdhc',
  authDomain: 'uvbusschedule.firebaseapp.com',
  databaseURL: 'https://uvbusschedule-default-rtdb.firebaseio.com',
  projectId: 'uvbusschedule',
  storageBucket: 'uvbusschedule.appspot.com',
  messagingSenderId: '814383885380',
  appId: '1:814383885380:web:523d152bd4860437e1a011'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getDatabase(app)
export default db
