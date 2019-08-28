import React, {useState, useEffect} from 'react';
import './List.css';
import ListDetail from "../ListDetail/ListDetail";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Button} from "react-bootstrap";
import {Form} from "react-bootstrap";
import { connect } from 'react-redux'
import {fetchToDos, completeToDo, addToDo}  from "../../actions";



const List = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [job, setJob] = useState("");
    const {data} = props;


    function addWorker(e) {
        var newWorker = {
            firstname: firstname,
            lastname: lastname,
            job: job,
            position: Object.keys(data).length+1
        };

        props.addToDo(newWorker);

        setFirstName("");
        setLastName("");
        setJob("");

    }

    function deleteWorker (id) {
        props.completeToDo(id)
    }

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleJobChange(e) {
        setJob(e.target.value);
    }




    useEffect(() => {
        props.fetchToDos();
    });

        return (
            <div>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="formGroupFN">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control type="text" placeholder="Entrez votre prénom"
                                              value={firstname}
                                              onChange={handleFirstNameChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupLN">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" placeholder="Entrez votre nom"
                                              value={lastname}
                                              onChange={handleLastNameChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGroupJob">
                                <Form.Label>Job</Form.Label>
                                <Form.Control type="text" placeholder="Quel est votre job ?"
                                              value={job}
                                              onChange={handleJobChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Button onClick={addWorker} variant="primary">Ajouter</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col><ListDetail delete={deleteWorker} workers={data}/></Col>
                    <Col></Col>
                </Row>
            </div>
        );
}

const mapStateToProps = ({data}) => {
    return {
        data
    }
}

export default connect(mapStateToProps, {fetchToDos, completeToDo, addToDo})(List);
