import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {Editor} from "../components/AstronautsEditor";
import {loadAstronautsAction} from "../app/actions/thunkActions";
import memoize from 'memoizee';


const listIdentity = (list: Array<string>): Array<string> => list;
const memoizedList = memoize(listIdentity, {primitive: true});

export const EditorContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const ids = useAppSelector(s => {
        const keys = Array.from(s.astronauts.keys());

        return memoizedList(keys);
    });

    useEffect(() => {
        dispatch(loadAstronautsAction());
    }, [dispatch]);


    return(<Editor astronauts={ids} />)
}

export {EditorContainer as Editor};