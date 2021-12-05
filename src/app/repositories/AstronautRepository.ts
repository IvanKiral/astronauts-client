import {IAstronautDto, IAstronautRepository} from "./IAstronautRepository";
import {IAstronaut} from "../types/astronaut.type";

const api_url = 'https://astronauts-backend.azurewebsites.net/api/astronaut/';

export const AstronautRepository: IAstronautRepository = {

    async getAstronauts(): Promise<IAstronautDto[]> {
        const response = await fetch(api_url);
        const data = await response.text();
        const parsedData = JSON.parse(data);
        return parsedData.astroanuts;
    },

    async addAstronaut(astronaut: IAstronaut): Promise<IAstronautDto> {
        const data = JSON.stringify(astronaut);
        const response = await fetch(api_url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const responseData = await response.text();

        return JSON.parse(responseData);
    },

    async updateAstronaut(id: string, astronaut: IAstronaut): Promise<IAstronautDto> {
        const data = JSON.stringify(astronaut);
        const response = await fetch(api_url + id, {
            method: 'PUT',
            body: data,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const responseData = await response.text();

        return JSON.parse(responseData);
    },

    async deleteAstronaut(id: string): Promise<void> {
        await fetch(api_url + id, {method: 'DELETE'});
    },
}