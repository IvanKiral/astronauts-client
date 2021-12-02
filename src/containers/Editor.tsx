import React from "react";
import {useAppSelector} from "../app/hooks";
import {Editor} from "../components/AstronautsEditor";

export const EditorContainer: React.FC = () => {
    const state = useAppSelector(s => s.astronauts)

    return(<Editor astronauts={state} />)
}

export {EditorContainer as Editor};