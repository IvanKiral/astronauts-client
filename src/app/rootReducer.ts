import { combineReducers } from 'redux';
import { astronautReducer } from "./reducers/astronautReducer";
import {IAstronautsMap} from "./types/IAstronautsMap.type";

export interface IStore{
    astronauts: IAstronautsMap;
}

export const rootReducer = combineReducers({
    astronauts: astronautReducer,
});