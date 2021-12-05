import React, {useEffect} from "react";
import {Ensurer} from "../components/Ensurer";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {loadAstronautsAction} from "../app/actions/thunkActions";


export const EnsurerContainer: React.FC =() => {
    const dispatch = useAppDispatch();
    const isDataLoaded = useAppSelector(s => s.astronautsState.isDataLoaded)

    useEffect(() => {
        dispatch(loadAstronautsAction());
    }, [dispatch]);

    return(<Ensurer isDataLoaded={isDataLoaded} />)
}

export {EnsurerContainer as Ensurer};