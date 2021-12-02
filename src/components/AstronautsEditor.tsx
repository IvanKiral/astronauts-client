import React from 'react'
import Table from 'react-bootstrap/Table'
import {EditorItem} from "./EditorItem";

export const Editor: React.FC = () => {

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
            <EditorItem/>
        </tbody>
    </Table>)
}