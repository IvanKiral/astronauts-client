import counterReducer from '../features/counter/counterSlice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    state: counterReducer,
});