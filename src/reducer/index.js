import { combineReducers } from 'redux';
import AuthReducer from './authreducer';
import OrderForm from  './orderform';
import OrderReducer from './orderreducer'; 
//import reducer from '../reducer';

const reducers =  combineReducers({
    auth: AuthReducer,
    orderForm: OrderForm,  
    orders: OrderReducer
});

export default reducers;    