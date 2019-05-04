import { combineReducers } from 'redux';
import AuthReducer from './authreducer';
import OrderForm from  './orderform';
import OrderReducer from './orderreducer';

export default combineReducers({
    auth: AuthReducer,
    orderForm: OrderForm,  
    orders: OrderReducer
});