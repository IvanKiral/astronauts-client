import {EditorItem} from "../components/EditorItem";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import React from "react";
import {AstronautDeletedAction} from "../app/actions/creators/astronautActions";

interface IEditorItemContainerProps{
    readonly id: string;
}

export const EditorItemContainer: React.FC<IEditorItemContainerProps> = ({id}) => {
    const dispatch = useAppDispatch();
    const astronaut = useAppSelector(s => s.astronauts.get(id))

    const onDelete = () => {
        dispatch(AstronautDeletedAction(id))
    }

    if (astronaut === undefined)
        return <></>

    return (
        <EditorItem
            astronaut={astronaut}
            onDelete={onDelete}
        />
    )
}

export { EditorItemContainer as EditorItem };