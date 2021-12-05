import {operationInProgress, operationNotInProgress} from "../actionTypes";


export type OperationInProgressAction = ReturnType<typeof OperationIsInProgressAction | typeof OperationIsNotInProgressAction>;

export const OperationIsInProgressAction = () => ({
    type: operationInProgress,
}) as const;

export const OperationIsNotInProgressAction = () => ({
    type: operationNotInProgress,
}) as const;