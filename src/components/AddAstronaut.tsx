import React, {FormEvent, useState} from "react";
import {Button, Form, FormControl, InputGroup, Modal} from "react-bootstrap";

interface IAddAstronautProps{
    handleCreate: (name: string, surname: string, date: string, ability: string) => void
}

export const AddAstronaut: React.FC<IAddAstronautProps> = ({handleCreate}) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [date, setDate] = useState("");
    const [ability, setAbility] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        handleCreate(name, surname, date, ability);
        event.preventDefault()
    }

    return (<>
        <Button variant="primary" onClick={handleShow}>Add astronaut</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add astronaut</Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>
            <Modal.Body>

                <InputGroup className="mb-3">
                    <FormControl
                        required
                        placeholder="Name"
                        aria-label="Name"
                        onChange={(event) => setName(event.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                        required
                        placeholder="Surname"
                        aria-label="Surname"
                        onChange={(event) => setSurname(event.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                        required
                        type="date"
                        placeholder="Datetime"
                        aria-label="Recipient's username"
                        onChange={(event) => setDate(event.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                        required
                        placeholder="Ability"
                        aria-label="Ability"
                        onChange={(event) => setAbility(event.target.value)}
                    />
                </InputGroup>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
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