import React from 'react';
import firebase from 'firebase';
import { Provider }  from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers  from './reducer';
import  { RouterComponent }  from './router';
//import  LibraryList from './components/librarylist'; 
//import LoginForm from '../components/loginform';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class AppRedux extends React.Component {
    componentWillMount(){
      const config = {   
        apiKey: 'AIzaSyACNfpCprNjrP1CdrKR4UJ7Gt9kqjkRgAI',
        authDomain: 'printhub-d86b6.firebaseapp.com',
        databaseURL: 'https://printhub-d86b6.firebaseio.com',
        projectId: 'printhub-d86b6',
        storageBucket: 'printhub-d86b6.appspot.com',
        messagingSenderId: '393316642136'
      };
     firebase.initializeApp(config); 
    }

    render(){
        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );  
    }
} 
