const reducer = (state = [], action) => {
    if (action.type === 'split_string'){
       return action.payload.split(''); 
    } else if (action.type === 'add_character'){
        return [ ...state, action.payload ]; 
    }
    return state;
}; 

const store = Redux.createStore(reducer);

store.getState();

const action1 = {
    type: 'split_string',
    payload: 'asdf'
};

store.dispatch(action1);

const action2 = {
    type: 'add_character',
    payload: 'g'
};

store.dispatch(action2);
store.getState();