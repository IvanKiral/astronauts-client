import {IAstronautRepository} from "../../repositories/IAstronautRepository";
import {AppDispatch} from "../../store";
import {AstronautDeletedAction} from "../creators/astronautActions";

interface IDeps{
    astronautRepository: IAstronautRepository;
}

export const createDeleteAstronautAction = ({astronautRepository}: IDeps) =>
    (id: string) =>
        async (dispatch: AppDispatch) => {
            try{
                await astronautRepository.deleteAstronaut(id);
                dispatch(AstronautDeletedAction(id));
            } catch (e){

            }
        }