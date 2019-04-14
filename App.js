import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import firebase from 'firebase';
import FloatingLabel from './loginform.js';
import { Button, Container, View } from 'native-base';
import { Spinner } from './components/spinner.js';

//import {Login} from './login';
//Platform, Text, View

export default class App extends Component {
  state = {
    loggedIn: null
  };


  componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyACNfpCprNjrP1CdrKR4UJ7Gt9kqjkRgAI',
    authDomain: 'printhub-d86b6.firebaseapp.com',
    databaseURL: 'https://printhub-d86b6.firebaseio.com',
    projectId: 'printhub-d86b6',
    storageBucket: 'printhub-d86b6.appspot.com',
    messagingSenderId: '393316642136'
    });
  
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({loggedIn: true});
        } else {
          this.setState({loggedIn: false});
        }
      }
    );
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return(
          <Button onPress={() => {firebase.auth.signOut()}}>
          LogOut
          </Button> 
        );
      case false:
        return <FloatingLabel />;
      default:
        return <View><Spinner /></View>;
    }     
  }

  render() {
    return (  
      <Container>
      {/* <FloatingLabel />    */}
      {this.renderContent()}
      </Container>
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
  loadingUser: {
    alignContent: 'center',
    paddingTop: 40
  }
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
