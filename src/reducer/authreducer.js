import { LOGIN_USER, EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../action/types';

const INITIAL_STATE = { email: '', password: '', user: '',  error: '', loading: false
};

export default (state = INITIAL_STATE, action) => {
    //console.log(action);

    switch (action.type){
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER:
            return {...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload, error:'', loading: false, email: '', password: ''};
        case LOGIN_USER_FAIL:
            return {...state, error: 'Auth Failed....', loading: false};
        default: 
            return state;
    }
};