import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import './Components/i18n';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDH2bK0NqNW8U_CZpqjYVA2HQX2XhVBUI",
  authDomain: "react-site-2ad40.firebaseapp.com",
  projectId: "react-site-2ad40",
  storageBucket: "react-site-2ad40.appspot.com",
  messagingSenderId: "842400210358",
  appId: "1:842400210358:web:7e12ed3f67017bbafd3517",
  measurementId: "G-ETPZXZBF06"
};

const app = firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Header />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default getFirestore(app);