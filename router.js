import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import FloatingLabel from './loginform';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="login" component={FloatingLabel} title="Login" />
        </Router>
    );
};

export default RouterComponent;