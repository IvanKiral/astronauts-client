import {IAstronautRepository} from "../../repositories/IAstronautRepository";
import {AppDispatch} from "../../store";
import {AstronautsReplacedAction} from "../creators/astronautActions";
import {DataLoadedAction} from "../creators/dataLoadingActions";
import {errorOccurredAction} from "../creators/errorActions";

interface IDeps{
    astronautRepository: IAstronautRepository
}

export const createGetAstronautsAction = ({astronautRepository}: IDeps) =>
    () =>
        async (dispatch: AppDispatch): Promise<void> => {

            try {
                const astronauts = await astronautRepository.getAstronauts();
                dispatch(AstronautsReplacedAction(astronauts));
            }
            catch (e){
                dispatch(errorOccurredAction("Could not get astronauts. Please try again later."));
            } finally {
                dispatch(DataLoadedAction());
            }
        };