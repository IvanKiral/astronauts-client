import {IAstronautsMap} from "../types/IAstronautsMap.type";
import {Action} from "../actions/Action";
import {
    astronautCreated,
    astronautDeleted,
    astronautsReplaced,
    astronautUpdated,
    orderByChanged
} from "../actions/actionTypes";
import {AddAstronaut, DeleteAstronaut, OrderAstronauts, ReplaceAstronauts, UpdateAstronaut} from "../utils/MapUtils";
import {IAstronaut} from "../types/astronaut.type";

const initialState: IAstronautReducerState = {
    orderBy: null,
    astronauts: new Map([]),
}

export interface IAstronautReducerState{
    orderBy: OrderByFunction | null,
    astronauts: IAstronautsMap,
}

type AstronautMapEntry = [string, IAstronaut]
export type OrderByFunction = (a1:AstronautMapEntry, a2: AstronautMapEntry) => number;

export const orderByMap = {
    name: (a1: AstronautMapEntry, a2: AstronautMapEntry): number => a1[1].name.localeCompare(a2[1].name),
    surname: (a1: AstronautMapEntry, a2: AstronautMapEntry): number => a1[1].surname.localeCompare(a2[1].surname),
    birthday: (a1: AstronautMapEntry, a2: AstronautMapEntry): number => a1[1].birthday.localeCompare(a2[1].birthday),
    ability: (a1: AstronautMapEntry, a2: AstronautMapEntry): number => a1[1].ability.localeCompare(a2[1].ability),
}

export const astronautReducer = (state: IAstronautReducerState = initialState, action: Action): IAstronautReducerState => {
    switch (action.type) {
        case astronautCreated:
            return {
                orderBy: state.orderBy,
                astronauts: AddAstronaut(state.astronauts, action.payload.id, action.payload.astronaut, state.orderBy)
            };

        case astronautUpdated:
            return {
                orderBy: state.orderBy,
                astronauts: UpdateAstronaut(state.astronauts, action.payload.id, action.payload.astronaut, state.orderBy)
            };

        case astronautDeleted:
            return {
                orderBy: state.orderBy,
                astronauts: DeleteAstronaut(state.astronauts, action.payload.id)
            };

        case astronautsReplaced:
            return {
                orderBy: state.orderBy,
                astronauts: ReplaceAstronauts(state.astronauts, action.payload.astronauts)
            };

        case orderByChanged:
            return {
                orderBy: action.payload.orderBy,
                astronauts: OrderAstronauts(state.astronauts, action.payload.orderBy)
            };

        default:
            return state;
    }
};
