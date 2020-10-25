import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'AIzaSyDcyrsb-albP8Uz1D5EPfbv5fNDcjXs8r8',
    authDomain: 'jaisharx-dev.firebaseapp.com',
    databaseURL: 'https://jaisharx-dev.firebaseio.com',
    projectId: 'jaisharx-dev',
    storageBucket: 'jaisharx-dev.appspot.com',
    messagingSenderId: '100968992650',
    appId: '1:100968992650:web:07315836c09dccb7d58273',
    measurementId: 'G-NP267YYHFV',
};

// Check that `window` is in scope for the analytics module!
if (typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    if ('measurementId' in firebaseConfig) firebase.analytics();
}

export default firebase;
