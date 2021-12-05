import {astronautCreated, astronautDeleted, astronautsReplaced, astronautUpdated} from "../actionTypes";
import {IAstronaut} from "../../types/astronaut.type";
import {IAstronautDto} from "../../repositories/IAstronautRepository";

export type AstronautAction = ReturnType<typeof AstronautCreatedAction | typeof AstronautDeletedAction | typeof AstronautUpdatedAction
    | typeof AstronautsReplacedAction>


export const AstronautCreatedAction = (astronaut: IAstronaut) => ({
    type: astronautCreated,
    payload: { astronaut }
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