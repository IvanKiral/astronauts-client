import {AstronautAction} from "./creators/astronautActions";
import {DataLoadingAction} from "./creators/dataLoadingActions";
import {OperationInProgressAction} from "./creators/operationInProgressAction";
import {ErrorActions} from "./creators/errorActions";

export type Action = AstronautAction | DataLoadingAction | OperationInProgressAction | ErrorActions;