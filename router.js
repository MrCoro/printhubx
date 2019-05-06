import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Desc from './appdesc';
import ItemSpecs from './itemdetails';
import PickerEx from './printmethod';
import ContentExample from './tambahfile';
import TotalPay from './totalbiaya';
import Loc from './address';
//import FloatingLabel from './loginform';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="desc" component={Desc} title="PrintHub" hideNavBar={true}/>
            <Scene key="itemspecs" component={ItemSpecs} title="PrintHub" hideNavBar={true}/>
            <Scene key="pickerex" component={PickerEx} title="PrintHub" hideNavBar={true}/>
            <Scene key="contentexample" component={ContentExample} title="PrintHub" hideNavBar={true}/>
            <Scene key="loc" component={Loc} title="PrintHub" hideNavBar={true}/>
		        <Scene key="totalpay" component={TotalPay} title="PrintHub" hideNavBar={true}/>
        </Router>
    );
};

//<Scene key="login" component={FloatingLabel} title="Login" />
export default RouterComponent;