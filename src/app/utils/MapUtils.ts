import {IAstronautsMap} from "../types/IAstronautsMap.type";
import {IAstronaut} from "../types/astronaut.type";
import {v4 as uuid} from "uuid";

export const AddAstronaut = (state: IAstronautsMap, astronaut: IAstronaut) => {
    const newMap = new Map(state);
    newMap.set(uuid(), astronaut);

    return newMap
}

export const UpdateAstronaut = (state: IAstronautsMap, id: string, astronaut: IAstronaut) => {
    const newMap = new Map(state);
    newMap.set(id, astronaut)

    return newMap
}

export const DeleteAstronaut = (state: IAstronautsMap, id: string) => {
    const newMap = new Map(state);
    newMap.delete(id)

    return newMap
}