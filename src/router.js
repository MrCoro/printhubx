import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { LoginForm } from '../components/loginform';
import Listing from '../components/listing';
import { CreateOrder } from '../components/createorder';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login Screen"/>
            </Scene>
            <Scene key="main">
                <Scene key="pageList" onRight={() => Actions.createOrder()} rightTitle="Add" component={Listing} title="List Halaman" initial/>
                <Scene key="createOrder" component={CreateOrder} title="Create Order"/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;