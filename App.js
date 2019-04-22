import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
//import firebase from 'firebase';
//import PickerEx from './printmethod.js';
//import FloatingLabel from './loginform.js';
import ItemSpecs from './itemdetails.js';

//import {Login} from './login';
//Platform, Text, View

export default class App extends Component {
  /*componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyACNfpCprNjrP1CdrKR4UJ7Gt9kqjkRgAI',
    authDomain: 'printhub-d86b6.firebaseapp.com',
    databaseURL: 'https://printhub-d86b6.firebaseio.com',
    projectId: 'printhub-d86b6',
    storageBucket: 'printhub-d86b6.appspot.com',
    messagingSenderId: '393316642136'
    });
  }*/

  render() {
    return (  
      //<FloatingLabel />
	  //<PickerEx />
	  <ItemSpecs />
      );
  }
}


const styles = StyleSheet.create(
  {
  welcome: 
    {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

/* <View style={styles.container}>
        <Text style={styles.welcome}>Print HUB</Text>
      </View> */
