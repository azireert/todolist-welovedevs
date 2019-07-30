import React from 'react';
import './List.css';
import ListDetail from "../ListDetail/ListDetail";
import firebase from '../../firebase/firebase.js';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Button} from "react-bootstrap";
import {Form} from "react-bootstrap";



class List extends React.Component{
    state = {
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
    }

    componentDidMount() {
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

            this.setState({
                list: newState
            });
        });

    }

    addWorker(e) {
        var newWorker = {
            id: this.state.list.length+1,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            job: this.state.job
        };
        /*this.setState((prevState) => {
            return {
                list: prevState.list.concat(newWorker)
            };
        });*/

        this.state.list.push(newWorker);

        firebase.database().ref('/').set(this.state.list);


        this.setState( {firstname : "", lastname: "", job: ""});



    }

    delete(id){
        this.setState(prevState => ({
            list: prevState.list.filter(el => el.id !== id )
        }));
        let idRef = id-1;
        firebase.database().ref('/' + idRef).remove();

    }

    render() {
        return (
            <div>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="formGroupFN">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control type="text" placeholder="Entrez votre prénom"
                                              value={this.state.firstname}
                                              onChange={e => this.setState({firstname: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupLN">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" placeholder="Entrez votre nom"
                                              value={this.state.lastname}
                                              onChange={e => this.setState({lastname: e.target.value})}/>
                            </Form.Group>
                            <Form.Group controlId="formGroupJob">
                                <Form.Label>Job</Form.Label>
                                <Form.Control type="text" placeholder="Quel est votre job ?"
                                              value={this.state.job}
                                              onChange={e => this.setState({job: e.target.value})}/>
                            </Form.Group>
                            <Form.Group>
                                <Button onClick={this.addWorker} variant="primary">Ajouter</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col><ListDetail delete={this.delete} workers={this.state.list}/></Col>
                    <Col></Col>
                </Row>
            </div>
        );
    }
}

export default List;
