import { ORDER_UPDATE, ORDER_CREATE }  from '../action/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    jenis: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ORDER_UPDATE:
            //action.payload === {prop="name", value="aan"}
            return {...state, [action.payload.prop]: action.payload.value }
        case ORDER_CREATE:    
            return INITIAL_STATE;
        default: 
            return state;
    }
}