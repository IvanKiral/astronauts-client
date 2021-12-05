import {IAstronaut} from "../types/astronaut.type";

export interface IAstronautDto {
    readonly id: string;
    readonly name: string;
    readonly surname: string;
    readonly birthday: string;
    readonly ability: string;
}

export interface IAstronautRepository{
    getAstronauts(): Promise<IAstronautDto[]>;

    addAstronaut(astronaut: IAstronaut): Promise<IAstronautDto>;

    updateAstronaut(id: string, astronaut: IAstronaut): Promise<IAstronautDto>;

    deleteAstronaut(id: string): Promise<void>;
}