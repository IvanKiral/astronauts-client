import {IAstronautRepository} from "../../repositories/IAstronautRepository";
import {AppDispatch} from "../../store";
import {AstronautDeletedAction} from "../creators/astronautActions";
import {OperationIsInProgressAction, OperationIsNotInProgressAction} from "../creators/operationInProgressAction";

interface IDeps{
    astronautRepository: IAstronautRepository;
}

export const createDeleteAstronautAction = ({astronautRepository}: IDeps) =>
    (id: string) =>
        async (dispatch: AppDispatch) => {
            dispatch(OperationIsInProgressAction());
            try{
                await astronautRepository.deleteAstronaut(id);
                dispatch(AstronautDeletedAction(id));
            } catch (e){

            } finally {
                dispatch(OperationIsNotInProgressAction());
            }
        }