import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import { Header } from 'native-base';
import  LibraryList from './components/librarylist'; 

const AppRedux = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>
            <Header headerText="Redux Test Header" />
            <LibraryList />
            </View>

        </Provider>
    );  
}; 

export default AppRedux;