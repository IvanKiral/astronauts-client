import React from 'react'
import Table from 'react-bootstrap/Table'
import {EditorItem} from "../containers/EditorItem";
import {IErrorState} from "../app/reducers/errorReducer";
import {OrderByFunction, orderByMap} from "../app/reducers/astronautReducer";

interface EditorProps {
    readonly astronauts: Array<string>;
    readonly error: IErrorState;
    readonly orderBy: (parameter: OrderByFunction) => void;
}

export const Editor: React.FC<EditorProps> = ({astronauts, error, orderBy}) => {
    const{
        isError,
        message
    } = error;

    return (<>
        <Table striped bordered hover style={{marginTop: "16px"}}>
            <thead>
            <tr>
                <th style={{width: "22%"}} onClick={() => orderBy(orderByMap.name)}>Name</th>
                <th style={{width: "22%"}} onClick={() => orderBy(orderByMap.surname)}>Surname</th>
                <th style={{width: "22%"}} onClick={() => orderBy(orderByMap.birthday)}>Birthday</th>
                <th style={{width: "22%"}} onClick={() => orderBy(orderByMap.ability)}>Ability</th>
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