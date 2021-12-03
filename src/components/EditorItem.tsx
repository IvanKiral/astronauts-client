import React from "react";
import {IAstronaut} from "../app/types/astronaut.type";
import {Button} from "react-bootstrap";
import {AddAstronaut} from "../containers/AddAstronaut";

interface IEditorItemInterface{
    id: string,
    astronaut: IAstronaut
    onDelete: () => void;
}

export const EditorItem: React.FC<IEditorItemInterface> = ({id, astronaut, onDelete}) => {
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
        <td>
            <Button style={{marginRight: "8px"}} variant="danger" onClick={onDelete}>Delete</Button>
            <AddAstronaut buttonName={"Edit"} id={id} astronaut={astronaut}/>
        </td>
    </tr>)
}