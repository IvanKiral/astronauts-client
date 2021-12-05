import {IAstronautRepository} from "../../repositories/IAstronautRepository";
import {AppDispatch} from "../../store";
import {IAstronaut} from "../../types/astronaut.type";
import {AstronautUpdatedAction} from "../creators/astronautActions";
import {OperationIsInProgressAction, OperationIsNotInProgressAction} from "../creators/operationInProgressAction";
import {errorOccurredAction} from "../creators/errorActions";

interface IDeps{
    astronautRepository: IAstronautRepository;
}

export const createUpdateAstronautAction = ({astronautRepository} : IDeps) =>
     (id: string, astronaut: IAstronaut) =>
        async (dispatch: AppDispatch) => {
            dispatch(OperationIsInProgressAction());
            try{
                const response = await astronautRepository.updateAstronaut(id, astronaut);
                dispatch(AstronautUpdatedAction(id, response));
            } catch (e) {
                dispatch(errorOccurredAction("Could not update astronaut. Please try again later."));
            } finally {
                dispatch(OperationIsNotInProgressAction());
            }
        }