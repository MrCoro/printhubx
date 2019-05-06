import { combineReducers } from 'redux';
import libraryreducer from './libraryreducer';

export default combineReducers({
    libraries: libraryreducer
});