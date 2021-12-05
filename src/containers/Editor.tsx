import React from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {Editor} from "../components/AstronautsEditor";
import memoize from 'memoizee';
import {OrderByFunction} from "../app/reducers/astronautReducer";
import {OrderByChangedAction} from "../app/actions/creators/astronautActions";

const listIdentity = (list: Array<string>): Array<string> => list;
const memoizedList = memoize(listIdentity, {primitive: true});

export const EditorContainer: React.FC = () => {
    const dispatch = useAppDispatch();

    const ids = useAppSelector(s => {
        const keys = Array.from(s.astronautsState.list.astronauts.keys());

        return memoizedList(keys);
    });

    const orderBy = (parameter: OrderByFunction): void => {
        dispatch(OrderByChangedAction(parameter));
    }

    const error = useAppSelector(s => s.error);

    return (<Editor
            orderBy={orderBy}
            error={error}
            astronauts={ids}/>
    )
}

export {EditorContainer as Editor};