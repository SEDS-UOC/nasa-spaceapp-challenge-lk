/* eslint-disable */ 
import { initializeApp, firestore} from 'firebase'
export const firebase = require('firebase')
require('firebase/firestore')

const config = {
    apiKey: "AIzaSyAXre5hc5jdZmu6OHWxyU34MP6X4m_81Fw",
    authDomain: "spaceappslk.firebaseapp.com",
    databaseURL: "https://spaceappslk.firebaseio.com",
    projectId: "spaceappslk",
    storageBucket: "spaceappslk.appspot.com",
    messagingSenderId: "344437051644",
    appId: "1:344437051644:web:b3be77fcf8bb0b6f544779",
    measurementId: "G-JC1JNP5Z07"
}

export const firebaseApp = initializeApp(config);
export const firebaseFirestore = firebaseApp.firestore()
