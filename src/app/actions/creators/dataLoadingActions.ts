import {dataLoaded, dataNotLoaded} from "../actionTypes";

export type DataLoadingAction = ReturnType<typeof DataLoadedAction | typeof DataNotLoadedAction>;

export const DataLoadedAction = () => ({
    type: dataLoaded,
}) as const;

export const DataNotLoadedAction = () => ({
    type: dataNotLoaded,
}) as const;