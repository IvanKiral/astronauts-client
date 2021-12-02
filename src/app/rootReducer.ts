import { combineReducers } from 'redux';
import astronautReducer from "./reducers/astronautReducer";

export const rootReducer = combineReducers({
    state: astronautReducer,
});