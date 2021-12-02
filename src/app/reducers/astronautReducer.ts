import {v4 as uuid} from 'uuid'
import {IAstronautsMap} from "../types/IAstronautsMap.type";
import {Action} from "../actions/Action";
import {astronautCreated, astronautDeleted} from "../actions/actionTypes";


const initialState: IAstronautsMap = new Map([
    ["1", {name:"Ivan",  surname:"Kiral", birthday: Date(), ability:"Superschopnost"}]
]);

export const astronautReducer = (state: IAstronautsMap = initialState, action: Action): IAstronautsMap => {
    switch (action.type) {
        case astronautCreated:
            const newMap = new Map(state)
            newMap.set(uuid(), action.payload.astronaut)

            return newMap

        case astronautDeleted:
            const newMap1 = new Map(state)
            newMap1.delete(action.payload.id)

            return newMap1

        default:
            return state;
    }
};
