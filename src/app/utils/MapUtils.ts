import {IAstronautsMap} from "../types/IAstronautsMap.type";
import {IAstronaut} from "../types/astronaut.type";
import {IAstronautDto} from "../repositories/IAstronautRepository";
import {OrderByFunction} from "../reducers/astronautReducer";

export const ReplaceAstronauts = (state: IAstronautsMap, astronauts: Array<IAstronautDto>): IAstronautsMap => astronauts.reduce(
        (previousMap, astronaut) => previousMap.set(astronaut.id, astronaut),
        new Map<string, IAstronaut>()
    );

export const AddAstronaut = (state: IAstronautsMap, id: string, astronaut: IAstronaut, orderBy: OrderByFunction | null): IAstronautsMap => {
    const newMap = new Map(state);
    newMap.set(id, astronaut);

    if(orderBy !== null){
        return new Map([...Array.from(newMap.entries())].sort(orderBy))
    }

    return newMap
}

export const UpdateAstronaut = (state: IAstronautsMap, id: string, astronaut: IAstronaut, orderBy: OrderByFunction | null): IAstronautsMap => {
    const newMap = new Map(state);
    newMap.set(id, astronaut)

    if(orderBy !== null){
        return new Map([...Array.from(newMap.entries())].sort(orderBy))
    }

    return newMap
}

export const DeleteAstronaut = (state: IAstronautsMap, id: string): IAstronautsMap => {
    const newMap = new Map(state);
    newMap.delete(id)

    return newMap
}

export const OrderAstronauts = (state: IAstronautsMap, orderBy: OrderByFunction): IAstronautsMap =>
    new Map([...Array.from(state.entries())].sort(orderBy));
