import React, {Component} from 'react'; //
import firebase from 'firebase'; //
import { View } from 'native-base'; //
import FloatingLabel from './loginform.js'; //
import { Spinner } from './src/components/spinner'; //
import RouterComponent from './router.js'; //
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware} from 'redux';
import reducers  from './src/reducer';
import ReduxThunk from 'redux-thunk';
//import { create } from 'domain';
//Platform,  Container, Text
//import { StyleSheet, Text } from 'react-native';
// Button, Container

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedIn: null
    }
  }
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
          this.setState({loggedIn: true}); //true
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
        <RouterComponent />
        );
          
          //   <Button onPress={() => {firebase.auth().signOut()}} > 
          //   <Text>LogOut</Text>
          //   </Button> 
          case false:
        return <FloatingLabel />;
      default:
       return <View><Spinner /></View>;
    }     
  }

  render() {
    return (  
      <Provider store={store}>
        {this.renderContent()}   
      </Provider>
    );
  }
}

// const styles = StyleSheet.create(
//   {
//   welcome: 
//     {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   }, 
//   loadingUser: {
//     alignContent: 'center',
//     paddingTop: 40
//   }
// });