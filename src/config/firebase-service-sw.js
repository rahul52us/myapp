/* global importScripts */

importScripts('https://www.gstatic.com/firebasejs/9.1.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.1/firebase-messaging-compat.js');
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: 'AIzaSyDjLpEPeHIF4XbmOrp2874uJFBycXGFq7c',
  authDomain: 'notifications-a1edb.firebaseapp.com',
  projectId: 'notifications-a1edb',
  storageBucket: 'notifications-a1edb.appspot.com',
  messagingSenderId: '60473594217',
  appId: '1:60473594217:web:c04f368761563ec52bedf8',
  measurementId: 'G-YBF80Z1M5W',
};

initializeApp(firebaseConfig);
const messaging = firebase.messaging();

self.addEventListener('push', (event) => {
  // Handle push notifications here
  // ...
});

messaging.onBackgroundMessage((payload) => {
  // Handle background messages here
  // ...
});
