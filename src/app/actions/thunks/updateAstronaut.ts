import {IAstronautRepository} from "../../repositories/IAstronautRepository";
import {AppDispatch} from "../../store";
import {IAstronaut} from "../../types/astronaut.type";
import {AstronautUpdatedAction} from "../creators/astronautActions";

interface IDeps{
    astronautRepository: IAstronautRepository;
}

export const createUpdateAstronautAction = ({astronautRepository} : IDeps) =>
     (id: string, astronaut: IAstronaut) =>
        async (dispatch: AppDispatch) => {
            try{
                const response = await astronautRepository.updateAstronaut(id, astronaut);
                dispatch(AstronautUpdatedAction(id, response));
            } catch (e) {

            }
        }