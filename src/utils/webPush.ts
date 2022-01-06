import 'firebase/messaging';
import firebase from 'firebase/app';
import localforage from 'localforage';

const firebaseCloudMessaging = {
  tokenInLocalforage: async (): Promise<null> => {
    return localforage.getItem('fcm_token');
  },

  init: async function (): Promise<false | undefined> {
    firebase.initializeApp({
      apiKey: 'YOUR-API-KEY',
      projectId: 'YOUR-PROJECT-ID',
      messagingSenderId: 'YOUR-SENDER-ID',
      appId: 'YOUR-APP-ID',
    });

    try {
      if ((await this.tokenInLocalforage()) !== null) {
        return false;
      }

      const messaging = firebase.messaging();
      await Notification.requestPermission();
      const token = await messaging.getToken();

      localforage.setItem('fcm_token', token);
      // eslint-disable-next-line
      console.log('fcm_token', token);
    } catch (error) {
      console.error(error);
    }
  },
};

export { firebaseCloudMessaging };

// HOW TO USE
// ----------
// [1] - Set your messagingSenderId in static/firebase-messaging-sw.js and utils/webPush.ts
//
// [2] - Import "firebaseCloudMessaging" into your component [Most likely index.js]
// import { firebaseCloudMessaging } from '../utils/webPush'
//
// [3] - Initialize the firebase cloud messaging
// Init firebase cloud messaging
// useEffect(() => {
//     firebaseCloudMessaging.init()
// }, [])
