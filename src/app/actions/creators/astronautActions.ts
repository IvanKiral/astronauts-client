import {astronautCreated, astronautDeleted} from "../actionTypes";
import {IAstronaut} from "../../types/astronaut.type";

export type AstronautAction = ReturnType<typeof AstronautCreatedAction | typeof AstronautDeletedAction >


export const AstronautCreatedAction = (astronaut: IAstronaut) => ({
    type: astronautCreated,
    payload: { astronaut }
}) as const;

export const AstronautDeletedAction = (id: string) => ({
    type: astronautDeleted,
    payload: { id },
}) as const;