import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import firebase from 'firebase/compat/app';

import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAfKJN4jneMMLkBZchbFIIgD0UFR6ZIyuE',
  authDomain: 'nanny-sevices.firebaseapp.com',
  databaseURL:
    'https://nanny-sevices-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nanny-sevices',
  storageBucket: 'nanny-sevices.appspot.com',
  messagingSenderId: '510237966088',
  appId: '1:510237966088:web:a6dbf2f6d293d110cdf6bd',
  measurementId: 'G-N5MEN7HHTQ',
};

firebase.initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Nanny-Sevices">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
