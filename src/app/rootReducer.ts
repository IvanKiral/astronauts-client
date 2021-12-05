import { combineReducers } from 'redux';
import {astronautStateReducer, IAstronautStateReducer} from "./reducers/astronautStateReducer";
import {errorReducer, IErrorState} from "./reducers/errorReducer";

export interface IStore{
    astronauts: IAstronautStateReducer;
    error: IErrorState
}

export const rootReducer = combineReducers({
    astronautsState: astronautStateReducer,
    error: errorReducer,
});