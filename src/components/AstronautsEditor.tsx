import React from 'react'
import Table from 'react-bootstrap/Table'
import {EditorItem} from "../containers/EditorItem";
import {IErrorState} from "../app/reducers/errorReducer";

interface EditorProps {
    astronauts: Array<string>
    error: IErrorState
}

export const Editor: React.FC<EditorProps> = ({astronauts, error}) => {
    const{
        isError,
        message
    } = error;

    return (<>
        <Table striped bordered hover>
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
            {astronauts.map(key => <EditorItem key={key} id={key}/>)}
            </tbody>
        </Table>
        {isError && <p>{message}</p>}
    </>)
}