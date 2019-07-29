import React from 'react';
import './List.css';
import ListDetail from "../ListDetail/ListDetail";
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
            list : [
                {
                    id: 1,
                    firstname: 'Damien ',
                    lastname: 'Cavaillès',
                    job: 'Co-Founder',
                },
                {
                    id: 2,
                    firstname: 'Vincent',
                    lastname: 'Cotro',
                    job: 'Co-Founder',
                },
                {
                    id: 3,
                    firstname: 'Thomas',
                    lastname: 'Grivet',
                    job: 'React developer',
                },
                {
                    id: 4,
                    firstname: 'Martin',
                    lastname: 'Lutton',
                    job: 'Recruiter',
                },
                {
                    id: 5,
                    firstname: 'Alexis',
                    lastname: 'Camus',
                    job: 'Customer success',
                },
                {
                    id: 6,
                    firstname: 'Nicolas',
                    lastname: 'Detrez',
                    job: 'Content Specialist',
                },
                {
                    id: 7,
                    firstname: 'Clement',
                    lastname: 'Devos',
                    job: 'JS Developer',
                },
                {
                    id: 8,
                    firstname: 'Quentin',
                    lastname: 'Tournier',
                    job: 'React developer',
                },
                {
                    id: 9,
                    firstname: 'Pierre',
                    lastname: 'Willame',
                    job: 'Customer success',
                },
                {
                    id: 10,
                    firstname: 'Alexandre',
                    lastname: 'Brisbout',
                    job: 'Customer',
                }
            ]
        };
        this.delete = this.delete.bind(this);
        this.addWorker = this.addWorker.bind(this);
    }

    addWorker(e) {
        var newWorker = {
            id: Date.now(),
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            job: this.state.job
        };
        this.setState((prevState) => {
            return {
                list: prevState.list.concat(newWorker)
            };
        });


        this.setState( {firstname : "", lastname: "", job: ""});



    }

    delete(id){
        console.log(id);
        this.setState(prevState => ({
            list: prevState.list.filter(el => el.id !== id )
        }));

    }

    render() {
        return (
            <div>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="formGroupFN" ref="myFrom">
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
