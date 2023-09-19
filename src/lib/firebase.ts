import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,

  // apiKey: 'AIzaSyDdNuZj9ZdZ2HTdw0xWm990nmuLD-1hAkw',
  // authDomain: 'watch-shop-b908f.firebaseapp.com',
  // projectId: 'watch-shop-b908f',
  // storageBucket: 'watch-shop-b908f.appspot.com',
  // messagingSenderId: '969217157529',
  // appId: '1:969217157529:web:816227ef0fd8b7670e8b08',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
