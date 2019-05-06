import firebase from 'firebase';
let config = {
    apiKey: 'AIzaSyACNfpCprNjrP1CdrKR4UJ7Gt9kqjkRgAI',
    authDomain: 'printhub-d86b6.firebaseapp.com',
    databaseURL: 'https://printhub-d86b6.firebaseio.com',
    projectId: 'printhub-d86b6',
    storageBucket: 'printhub-d86b6.appspot.com',
    messagingSenderId: '393316642136'
};

let app = firebase.initializeApp(config);
export const db = app.database();