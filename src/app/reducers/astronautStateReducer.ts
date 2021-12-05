import {astronautReducer} from "./astronautReducer";
import {isDataLoadedReducer} from "./isDataLoadedReducer";
import {combineReducers} from "redux";
import {IAstronautsMap} from "../types/IAstronautsMap.type";

export interface IAstronautStateReducer{
    isDataLoaded: boolean,
    list: IAstronautsMap,
    //isOperationInProgress: boolean,
}

export const astronautStateReducer = combineReducers<IAstronautStateReducer>({
    isDataLoaded: isDataLoadedReducer,
    list: astronautReducer,
    //isOperationInProgress: isOperationInProgressReducer,
});