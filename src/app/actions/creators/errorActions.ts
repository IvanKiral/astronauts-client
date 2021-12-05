import {errorNotOccurred, errorOccurred} from "../actionTypes";


export type ErrorActions = ReturnType<typeof errorOccurredAction | typeof errorNotOccurredAction >

export const errorOccurredAction = (message: string) => ({
    type: errorOccurred,
    payload: {message},
}) as const;

export const errorNotOccurredAction = () => ({
    type: errorNotOccurred,
}) as const;