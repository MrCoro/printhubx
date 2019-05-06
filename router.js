import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Desc from './appdesc';
import ItemSpecs from './itemdetails';
import PickerEx from './printmethod';
import ContentExample from './tambahfile';
import TotalPay from './totalbiaya';
//import FloatingLabel from './loginform';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="desc" component={Desc} hideNavBar={true}/>
            <Scene key="itemspecs" component={ItemSpecs} hideNavBar={true}/>
            <Scene key="pickerex" component={PickerEx} hideNavBar={true}/>
            <Scene key="contentexample" component={ContentExample} hideNavBar={true}/>
            <Scene key="totalpay" component={TotalPay} hideNavBar={true}/>      
        </Router>
    );
};

//<Scene key="login" component={FloatingLabel} title="Login" />
export default RouterComponent;