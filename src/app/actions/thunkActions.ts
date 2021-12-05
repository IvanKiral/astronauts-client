import {createGetAstronautsAction} from "./thunks/getAstronauts";
import {AstronautRepository} from "../repositories/AstronautRepository";
import {createAddAstronautAction} from "./thunks/addAstroanut";
import {createUpdateAstronautAction} from "./thunks/updateAstronaut";
import {createDeleteAstronautAction} from "./thunks/deleteAstronaut";

export const loadAstronautsAction = createGetAstronautsAction({astronautRepository: AstronautRepository});
export const addAstronautAction = createAddAstronautAction({astronautRepository: AstronautRepository});
export const updateAstronautAction = createUpdateAstronautAction({astronautRepository: AstronautRepository});
export const deleteAstronautAction = createDeleteAstronautAction({astronautRepository: AstronautRepository});
