import React from 'react'
import Table from 'react-bootstrap/Table'
import {IAstronautsMap} from "../app/types/IAstronautsMap.type";
import {EditorItem} from "../containers/EditorItem";

interface EditorProps {
    astronauts: IAstronautsMap
}

export const Editor: React.FC<EditorProps> = ({astronauts}) => {

    return (<Table striped bordered hover>
        <thead>
            <tr>
                <th style={{width: "22%"}}>Name</th>
                <th style={{width: "22%"}}>Surname</th>
                <th style={{width: "22%"}}>Birthday</th>
                <th style={{width: "22%"}}>Ability</th>
                <th style={{width: "12%"}}>Action</th>
            </tr>
        </thead>
        <tbody>
        {Array.from(astronauts.keys()).map((item) => <EditorItem id={item}/>)}
        </tbody>
    </Table>)
}