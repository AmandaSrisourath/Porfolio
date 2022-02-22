import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA65Y3WkjbRTgFmcWw9L0sztPjstmkGAlU",
  authDomain: "portfolio-ea231.firebaseapp.com",
  projectId: "portfolio-ea231",
  storageBucket: "portfolio-ea231.appspot.com",
  messagingSenderId: "481733143966",
  appId: "1:481733143966:web:52105872672376b7d0fa8f",
  measurementId: "G-TFXVMXQ4H6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
