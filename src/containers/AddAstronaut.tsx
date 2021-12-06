import React from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {AddAstronaut} from "../components/AddAstronaut";
import {IAstronaut} from "../app/types/astronaut.type";
import {addAstronautAction, updateAstronautAction} from "../app/actions/thunkActions";

interface IAddAstronautProps{
    readonly buttonName?: string
    readonly id?: string,
    readonly astronaut?: IAstronaut
}


export const AddAstronautContainer: React.FC<IAddAstronautProps> = ({buttonName, id, astronaut}) => {
    const dispatch = useAppDispatch();
    const isOperationInProgress = useAppSelector(s => s.astronautsState.isOperationInProgress);

    const handleCreate = (name: string, surname: string, date: string, ability: string): void => {
        if(id === undefined) {
            dispatch(addAstronautAction({name, surname, birthday: date, ability}))
        } else {
            dispatch(updateAstronautAction(id, {name, surname, birthday: date, ability}))
        }
    }

    return (<AddAstronaut
        buttonName={buttonName}
        astronaut={astronaut}
        handleCreate={handleCreate}
        isOperationInProgress={isOperationInProgress}
    />)
}

export {AddAstronautContainer as AddAstronaut}