import React from "react";
import {useAppDispatch} from "../app/hooks";
import {AstronautCreatedAction, AstronautUpdatedAction} from "../app/actions/creators/astronautActions";
import {AddAstronaut} from "../components/AddAstronaut";
import {IAstronaut} from "../app/types/astronaut.type";

interface IAddAstronautProps{
    readonly buttonName?: string
    readonly id?: string,
    readonly astronaut?: IAstronaut
}


export const AddAstronautContainer: React.FC<IAddAstronautProps> = ({buttonName, id, astronaut}) => {
    const dispatch = useAppDispatch();

    const handleCreate = (name: string, surname: string, date: string, ability: string): void => {
        if(id === undefined) {
            dispatch(AstronautCreatedAction({name, surname, birthday: date, ability}))
        } else {
            dispatch(AstronautUpdatedAction(id, {name, surname, birthday: date, ability}))
        }
    }

    return (<AddAstronaut
        buttonName={buttonName}
        astronaut={astronaut}
        handleCreate={handleCreate}
    />)
}

export {AddAstronautContainer as AddAstronaut}