import React from "react";
import {useAppSelector} from "../app/hooks";
import {Editor} from "../components/AstronautsEditor";
import memoize from 'memoizee';

const listIdentity = (list: Array<string>): Array<string> => list;
const memoizedList = memoize(listIdentity, {primitive: true});

export const EditorContainer: React.FC = () => {
    const ids = useAppSelector(s => {
        const keys = Array.from(s.astronautsState.list.keys());

        return memoizedList(keys);
    });

    const error = useAppSelector(s => s.error);

    return(<Editor
        error={error}
        astronauts={ids} />
    )
}

export {EditorContainer as Editor};