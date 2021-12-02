import React from "react";
import {IAstronaut} from "../app/types/astronaut.type";

interface IEditorItemInterface{
    astronaut: IAstronaut
}

export const EditorItem: React.FC<IEditorItemInterface> = ({astronaut}) => {
    const {
        name,
        surname,
        birthday,
        ability
    } = astronaut

    return (<tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{birthday}</td>
        <td>{ability}</td>
    </tr>)
}