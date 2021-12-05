import {EditorItem} from "../components/EditorItem";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import React, {useEffect} from "react";
import {deleteAstronautAction, loadAstronautsAction} from "../app/actions/thunkActions";

interface IEditorItemContainerProps{
    readonly id: string;
}

export const EditorItemContainer: React.FC<IEditorItemContainerProps> = ({id}) => {
    const dispatch = useAppDispatch();
    const astronaut = useAppSelector(s => s.astronauts.get(id))

    useEffect(() => {
        dispatch(loadAstronautsAction());
    }, [dispatch]);

    const onDelete = () => {
        dispatch(deleteAstronautAction(id))
    }

    if (astronaut === undefined)
        return <></>

    return (
        <EditorItem
            astronaut={astronaut}
            onDelete={onDelete}
            id={id}
        />
    )
}

export { EditorItemContainer as EditorItem };