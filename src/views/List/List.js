import React, {useEffect, useState} from 'react';
import './List.css';
import ListDetail from "../ListDetail/ListDetail";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Button, Form} from "react-bootstrap";
import {connect} from 'react-redux'
import {addToDo, completeToDo, fetchToDos} from "../../actions";
import {bindActionCreators} from "redux";


const List = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [job, setJob] = useState("");
    const {workers, currentUser} = props;




    const addWorker = (e) => {
        var newWorker = {
            lastname: lastname,
            firstname: firstname,
            job: job,
            position: Object.keys(workers).length+1
        };

        props.addToDo(newWorker);

        setFirstName("");
        setLastName("");
        setJob("");

    }

    const deleteWorker = (id) => {
        props.completeToDo(id)
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }


    const handleJobChange = (e) => {
        setJob(e.target.value);
    }


    useEffect(() => {
        if(!props.hasReceivedWorkers){
            props.fetchToDos();
        }

    }, [props.hasReceivedWorkers]);


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
                                              onChange={handleLastNameChange}
                                              />
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
                    <Col><ListDetail delete={deleteWorker} workers={workers}/></Col>
                    <Col></Col>
                </Row>
            </div>
        );
}

const mapStateToProps = ({workersReducers, userReducer}) => {
    return {
        workers: workersReducers.workers,
        currentUser: userReducer.firebaseUser
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchToDos,
            completeToDo,
            addToDo
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(List);
