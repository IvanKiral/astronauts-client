import {Action} from "../actions/Action";
import {dataLoaded, dataNotLoaded} from "../actions/actionTypes";

const initialState = false;

export const isDataLoadedReducer = (state: boolean = initialState, action: Action): boolean => {
    switch (action.type){
        case dataLoaded:
            return true;
        case dataNotLoaded:
            return false;
        default:
            return state;
    }
}