import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingLabel from './loginform.js';
//import {Login} from './login';
//Platform, , Text, View

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  render() {
    return (  
      <FloatingLabel />   
    );
  }
}

/* <View style={styles.container}>
        <Text style={styles.welcome}>Print HUB</Text>
      </View> */

const styles = StyleSheet.create({
  welcome: {
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
