import {astronautReducer, IAstronautReducerState} from "./astronautReducer";
import {isDataLoadedReducer} from "./isDataLoadedReducer";
import {combineReducers} from "redux";
import {isOperationInProgressReducer} from "./isOperationInProgressReducer";

export interface IAstronautStateReducer{
    isDataLoaded: boolean,
    list: IAstronautReducerState,
    isOperationInProgress: boolean,
}

export const astronautStateReducer = combineReducers<IAstronautStateReducer>({
    isDataLoaded: isDataLoadedReducer,
    list: astronautReducer,
    isOperationInProgress: isOperationInProgressReducer,
});