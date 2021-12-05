import {IAstronautsMap} from "../types/IAstronautsMap.type";
import {Action} from "../actions/Action";
import {astronautCreated, astronautDeleted, astronautsReplaced, astronautUpdated} from "../actions/actionTypes";
import {AddAstronaut, DeleteAstronaut, ReplaceAstronauts, UpdateAstronaut} from "../utils/MapUtils";


const initialState: IAstronautsMap = new Map([
    ["1", {name:"Ivan",  surname:"Kiral", birthday: Date(), ability:"Superschopnost"}]
]);

export const astronautReducer = (state: IAstronautsMap = initialState, action: Action): IAstronautsMap => {
    switch (action.type) {
        case astronautCreated:
            return AddAstronaut(state, action.payload.astronaut);

        case astronautUpdated:
            return UpdateAstronaut(state, action.payload.id, action.payload.astronaut);

        case astronautDeleted:
            return DeleteAstronaut(state, action.payload.id);

        case astronautsReplaced:
            return ReplaceAstronauts(state, action.payload.astronauts);

        default:
            return state;
    }
};
