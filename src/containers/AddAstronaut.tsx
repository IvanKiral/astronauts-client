import React from "react";
import {useAppDispatch} from "../app/hooks";
import {AstronautCreatedAction} from "../app/actions/creators/astronautActions";
import {AddAstronaut} from "../components/AddAstronaut";

export const AddAstronautContainer: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleCreate = (name: string, surname: string, date: string, ability: string): void => {
        dispatch(AstronautCreatedAction({name, surname, birthday:date, ability}))
    }

    return (<AddAstronaut
        handleCreate={handleCreate}
    />)
}

export {AddAstronautContainer as AddAstronaut}