import React, {FormEvent, useState} from "react";
import {Button, Form, FormControl, InputGroup, Modal} from "react-bootstrap";
import {IAstronaut} from "../app/types/astronaut.type";

interface IAddAstronautProps{
    readonly buttonName?: string;
    readonly astronaut?: IAstronaut;
    readonly handleCreate: (name: string, surname: string, date: string, ability: string) => void;
    readonly isOperationInProgress: boolean;
}

export const AddAstronaut: React.FC<IAddAstronautProps> = ({buttonName, astronaut, handleCreate, isOperationInProgress}) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(astronaut?.name ?? "");
    const [surname, setSurname] = useState(astronaut?.surname ??"");
    const [date, setDate] = useState(astronaut?.birthday ?? "");
    const [ability, setAbility] = useState(astronaut?.ability ?? "");

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () =>  {
        setName(astronaut?.name ?? "");
        setSurname(astronaut?.surname ?? "");
        setDate(astronaut?.birthday ?? "");
        setAbility(astronaut?.ability ?? "");
        setShow(true);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        handleCreate(name, surname, date, ability);
        handleClose();
        event.preventDefault()
    }

    const title = buttonName ? "Edit astronaut" : "Add astronaut";

    return (<>
        <Button
            disabled={isOperationInProgress}
            variant="primary"
            onClick={handleShow}>{buttonName ?? "Add astronaut"}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>
            <Modal.Body>

                <InputGroup className="mb-3">
                    <FormControl
                        value={name}
                        required
                        placeholder="Name"
                        aria-label="Name"
                        onChange={(event) => setName(event.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                        value={surname}
                        required
                        placeholder="Surname"
                        aria-label="Surname"
                        onChange={(event) => setSurname(event.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                        value={date}
                        required
                        type="date"
                        onChange={(event) => setDate(event.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                        value={ability}
                        required
                        placeholder="Ability"
                        aria-label="Ability"
                        onChange={(event) => setAbility(event.target.value)}
                    />
                </InputGroup>

            </Modal.Body>

            <Modal.Footer>
                <Button type='reset' variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button type="submit" variant="primary" >
                    Save Changes
                </Button>
            </Modal.Footer>
            </Form>
        </Modal>
    </>)
}