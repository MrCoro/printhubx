import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import LoginForm from './loginform';

//component
export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.loginContainer}>
                    <image resizeMode="contain" style={styles.logo} style={styles.logo} source={require('./assets/logo.jpg')} />
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#ffffff',
    }, 
    loginContainer:{
        alignItems: 'center',
        fllexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    formContainer: {
        alignItems: 'center'
    }
  });