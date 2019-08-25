import React, {useState, useEffect} from 'react';
import './List.css';
import ListDetail from "../ListDetail/ListDetail";
import firebase from '../../firebase/firebase.js';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Button} from "react-bootstrap";
import {Form} from "react-bootstrap";
import { connect } from 'react-redux'



function List (props){
    /*state = {
        firstname: "",
        lastname: "",
        job: ""
    }
    constructor(){
        super();
        this.state = {
            list : []
        };
        this.delete = this.delete.bind(this);
        this.addWorker = this.addWorker.bind(this);
    }*/

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [job, setJob] = useState("");
    const [list, setList] = useState([]);

    function addWorker(e) {
        var newWorker = {
            id: list.length+1,
            firstname: firstname,
            lastname: lastname,
            job: job
        };

        this.state.list.push(newWorker);

        /*const action = { type: "ADD_WORKER", list: list, value: newWorker }
        props.dispatch(action)*/

        firebase.database().ref('/').set(list);


        setFirstName("");
        setLastName("");
        setJob("");

    }

    function deleteWorker (id) {

        list.filter(el => el.id !== id )

        let idRef = id-1;
        firebase.database().ref('/' + idRef).remove();

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
        const workersRef = firebase.database().ref('/');
        workersRef.on('value',(snapshot) => {
            let workers = snapshot.val();
            let newState = [];
            for ( let worker in workers) {
                newState.push({
                    id: workers[worker].id,
                    firstname: workers[worker].firstname,
                    lastname: workers[worker].lastname,
                    job: workers[worker].job
                });
            }

            setList(newState)
        });
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
                    <Col><ListDetail delete={deleteWorker} workers={list}/></Col>
                    <Col></Col>
                </Row>
            </div>
        );
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
