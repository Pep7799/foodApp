import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDiwhhLUkJauEjDgPEf3ebB3NEGU69_Hu8",
    authDomain: "foodwebs-8f375.firebaseapp.com",
    databaseURL: "https://foodwebs-8f375-default-rtdb.firebaseio.com",
    projectId: "foodwebs-8f375",
    storageBucket: "foodwebs-8f375.appspot.com",
    messagingSenderId: "759831124903",
    appId: "1:759831124903:web:1716a1bc741c09187a7482"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);

  const storage = getStorage(app); 

  export {app, firestore, storage}; 