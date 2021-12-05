import {IAstronautRepository} from "../../repositories/IAstronautRepository";
import {AppDispatch} from "../../store";
import {AstronautDeletedAction} from "../creators/astronautActions";
import {OperationIsInProgressAction, OperationIsNotInProgressAction} from "../creators/operationInProgressAction";
import {errorOccurredAction} from "../creators/errorActions";

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
                dispatch(errorOccurredAction("Could not delete astronaut. Please try again later."));
            } finally {
                dispatch(OperationIsNotInProgressAction());
            }
        }