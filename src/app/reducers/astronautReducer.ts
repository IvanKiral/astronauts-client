import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAstronaut} from "../types/astronaut.type";
import {v4 as uuid} from 'uuid'
import {IAstronautsMap} from "../types/IAstronautsMap.type";


const initialState: IAstronautsMap = new Map([
    ["1", {name:"Ivan",  surname:"Kiral", birthday: Date(), ability:"Superschopnost"}]
]);


export const astronautSlice = createSlice({
    name: 'astronaut',
    initialState,
    reducers: {
        addAstronaut: (state, action: PayloadAction<IAstronaut>) => {
            const newMap = new Map(state)
            newMap.set(uuid(), action.payload)

            return newMap
        },
        deleteAstronaut: (state, action: PayloadAction<string>) => {
            const newMap = new Map(state)
            newMap.delete(action.payload)

            return newMap
        }
    },
});

export default astronautSlice.reducer;