import {Action} from "../actions/Action";
import {errorNotOccurred, errorOccurred} from "../actions/actionTypes";

export interface IErrorState {
    isError: boolean,
    message: string
}

const initialState = {
    isError: false,
    message: "",
}

export const errorReducer = (state: IErrorState = initialState, action: Action): IErrorState => {
    switch(action.type){
        case errorOccurred:
            return {isError: true, message: action.payload.message};

        case errorNotOccurred:
            return initialState;

        default:
            return state;
    }
}