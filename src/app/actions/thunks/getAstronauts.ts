import {IAstronautRepository} from "../../repositories/IAstronautRepository";
import {AppDispatch} from "../../store";
import {AstronautsReplacedAction} from "../creators/astronautActions";

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
            catch (e){}
        };