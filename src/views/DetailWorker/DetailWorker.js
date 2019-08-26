import React, {useState, useEffect} from 'react';
import './DetailWorker.css';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import logo from '../../avatar.jpg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import firebase from "../../firebase/firebase";
import {Link} from "react-router-dom";



const DetailWorker = (props) => {
    const { params } = props.match;
    const [worker, setWorker] = useState({});
    const [isListeningToFirebase, setIsListeningToFirebase] = useState(false);

    if (!isListeningToFirebase) {
        setIsListeningToFirebase(true);
        firebase.database().ref('/workers/'+params.id).on('value', snapshot => {
            setWorker(snapshot.val());
        })
    }
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo} />
                        <Card.Body>
                            <Card.Title>{worker.firstname} {worker.lastname}</Card.Title>
                            <Card.Text>
                                {worker.job}
                            </Card.Text>
                            <Link to={'/'}>
                            <Button variant="primary">Retour</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>

    );
}

export default DetailWorker;
