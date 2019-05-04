import { ORDER_UPDATE, ORDER_CREATE, ORDER_FETCH_SUCCESS } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const orderUpdate = ({prop, value}) => {
    return {
        type: ORDER_UPDATE,
        payload: { prop, value }
    };
};  

export const createOrder = ({ name, phone, jenis }) => {
    const { currentUser } = firebase.auth();
    
    return(dispatch) => {
    firebase.database.ref(`/user/${currentUser.uid}/`)
        .push({ name, phone, jenis })
            .then(() => {
                dispatch({ type: ORDER_CREATE });
                Actions.pageList({ type: 'reset' });
            });
    };
};

export const orderFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/user/${currentUser.uid}/`)
          .on('value', snapshot => {
             dispatch({ type: ORDER_FETCH_SUCCESS, payload: snapshot.val() });
          });
    };
};