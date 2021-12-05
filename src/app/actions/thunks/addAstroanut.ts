import {IAstronautRepository} from "../../repositories/IAstronautRepository";
import {AppDispatch} from "../../store";
import {AstronautCreatedAction} from "../creators/astronautActions";
import {IAstronaut} from "../../types/astronaut.type";
import {OperationIsInProgressAction, OperationIsNotInProgressAction} from "../creators/operationInProgressAction";

interface IDeps{
    astronautRepository: IAstronautRepository
}

export const createAddAstronautAction = ({astronautRepository}: IDeps) =>
    (astronaut: IAstronaut) =>
        async (dispatch: AppDispatch): Promise<void> => {
            dispatch(OperationIsInProgressAction());
            try {
                const newAstronaut = await astronautRepository.addAstronaut(astronaut);
                dispatch(AstronautCreatedAction(newAstronaut.id, newAstronaut));
            }
            catch (e){}
            finally {
                dispatch(OperationIsNotInProgressAction());
            }
        };