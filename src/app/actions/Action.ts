import {AstronautAction} from "./creators/astronautActions";
import {DataLoadingAction} from "./creators/dataLoadingActions";

export type Action = AstronautAction | DataLoadingAction;