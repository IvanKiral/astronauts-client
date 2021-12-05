import {astronautCreated, astronautDeleted, astronautsReplaced, astronautUpdated, orderByChanged} from "../actionTypes";
import {IAstronaut} from "../../types/astronaut.type";
import {IAstronautDto} from "../../repositories/IAstronautRepository";
import {OrderByFunction} from "../../reducers/astronautReducer";

export type AstronautAction = ReturnType<typeof AstronautCreatedAction | typeof AstronautDeletedAction | typeof AstronautUpdatedAction
    | typeof AstronautsReplacedAction | typeof OrderByChangedAction >


export const AstronautCreatedAction = (id: string, astronaut: IAstronaut) => ({
    type: astronautCreated,
    payload: { id, astronaut }
}) as const;

export const AstronautDeletedAction = (id: string) => ({
    type: astronautDeleted,
    payload: { id },
}) as const;

export const AstronautUpdatedAction = (id: string, astronaut: IAstronaut) => ({
    type: astronautUpdated,
    payload: { id, astronaut },
}) as const;

export const AstronautsReplacedAction = (astronauts: Array<IAstronautDto>) => ({
    type: astronautsReplaced,
    payload: { astronauts },
}) as const;

export const OrderByChangedAction = (orderBy: OrderByFunction) => ({
    type: orderByChanged,
    payload: { orderBy },
}) as const;