import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { observer } from 'mobx-react-lite';
import store from '../../store/store';

const firebaseConfig = {
  apiKey: 'AIzaSyDjLpEPeHIF4XbmOrp2874uJFBycXGFq7c',
  authDomain: 'notifications-a1edb.firebaseapp.com',
  projectId: 'notifications-a1edb',
  storageBucket: 'notifications-a1edb.appspot.com',
  messagingSenderId: '60473594217',
  appId: '1:60473594217:web:c04f368761563ec52bedf8',
  measurementId: 'G-YBF80Z1M5W',
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const FirebaseConfiration = observer(() => {
  const {
    auth: { sendNotification },
  } = store;

  useEffect(() => {
    Notification.requestPermission()
      .then((permission) => {
        if (permission === 'granted') {
          console.log('Permission granted!');
          // Proceed with token retrieval and sending it to the backend
          getToken(messaging)
            .then((token) => {
              console.log('Device Token:', token);
              // Send the device token to your backend API for further processing
              console.log(sendNotification)
              // sendNotification({ token })
              //   .then((response) => response.json())
              //   .then((data) => {
              //     console.log('Device token saved on the backend:', data);
              //   })
              //   .catch((error) => {
              //     console.error('Error saving device token:', error);
              //   });
            })
            .catch((error) => {
              console.log('Error retrieving device token:', error);
            });
        } else {
          console.log('Permission denied');
        }
      })
      .catch((error) => {
        console.log('Error requesting permission:', error);
      });
  }, []);

  return <></>;
});

export default FirebaseConfiration;
