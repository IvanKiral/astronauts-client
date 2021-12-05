import {AstronautAction} from "./creators/astronautActions";
import {DataLoadingAction} from "./creators/dataLoadingActions";
import {OperationInProgressAction} from "./creators/operationInProgressAction";

export type Action = AstronautAction | DataLoadingAction | OperationInProgressAction;