import {createGetAstronautsAction} from "./thunks/getAstronauts";
import {AstronautRepository} from "../repositories/AstronautRepository";

export const loadAstronautsAction = createGetAstronautsAction({astronautRepository: AstronautRepository});
