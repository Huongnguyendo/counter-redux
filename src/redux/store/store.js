import countReducer from "../reducer/countReducer";
import {createStore} from 'redux';

// wrap reducer in createStore
const store =  createStore(countReducer)

export default store;