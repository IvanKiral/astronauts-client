import {EditorItem} from "../components/EditorItem";
import {useAppSelector} from "../app/hooks";
import React from "react";

interface IEditorItemContainerProps{
    readonly id: string;
}

export const EditorItemContainer: React.FC<IEditorItemContainerProps> = ({id}) => {
    const astronaut = useAppSelector(s => s.astronauts.get(id))

    if (astronaut === undefined)
        return <></>

    return (
        <EditorItem astronaut={astronaut} />
    )
}

export { EditorItemContainer as EditorItem };