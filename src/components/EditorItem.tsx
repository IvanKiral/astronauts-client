import React from "react";
import {IAstronaut} from "../app/types/astronaut.type";
import {Button} from "react-bootstrap";

interface IEditorItemInterface{
    astronaut: IAstronaut
    onDelete: () => void;
}

export const EditorItem: React.FC<IEditorItemInterface> = ({astronaut, onDelete}) => {
    const {
        name,
        surname,
        birthday,
        ability
    } = astronaut

    return (<tr>
        <td className="align-middle">{name}</td>
        <td className="align-middle">{surname}</td>
        <td className="align-middle">{birthday}</td>
        <td className="align-middle">{ability}</td>
        <td><Button variant="danger" onClick={onDelete}>Delete</Button></td>
    </tr>)
}