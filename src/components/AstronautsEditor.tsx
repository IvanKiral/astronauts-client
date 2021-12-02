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
                <th>Name</th>
                <th>Surname</th>
                <th>Birthday</th>
                <th>Ability</th>
            </tr>
        </thead>
        <tbody>
        {Array.from(astronauts.keys()).map((item) => <EditorItem id={item}/>)}
        </tbody>
    </Table>)
}