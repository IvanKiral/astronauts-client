import { combineReducers } from 'redux';
import {astronautStateReducer, IAstronautStateReducer} from "./reducers/astronautStateReducer";

export interface IStore{
    astronauts: IAstronautStateReducer;
}

export const rootReducer = combineReducers({
    astronautsState: astronautStateReducer,
});