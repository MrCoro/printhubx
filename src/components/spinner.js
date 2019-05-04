import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => {
    return( 
      <View style={styles.spinner}>
          <ActivityIndicator size={'large'}/>
      </View>   
    );
};

const styles = {
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export {Spinner};