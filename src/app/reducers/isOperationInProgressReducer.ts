import {operationInProgress, operationNotInProgress} from "../actions/actionTypes";
import {Action} from "../actions/Action";

const initialState = false;

export const isOperationInProgressReducer = (state: boolean = initialState, action: Action): boolean => {
    switch (action.type) {
        case operationInProgress:
            return true;

        case operationNotInProgress:
            return false;

        default:
            return state;
    }
};