import React, {useState, useEffect} from 'react';
import './DetailWorker.css';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import logo from '../../avatar.jpg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import firebase from "../../firebase/firebase";



const DetailWorker = (props) => {
    const { params } = props.match;
    const [worker, setWorker] = useState([]);

    useEffect(() => {
        const workersRef = firebase.database().ref('/');
        workersRef.on('value',(snapshot) => {
            let workers = snapshot.val();
            let newState = [];
            for ( let worker in workers) {
                if (workers[worker].id === params.id-1) {
                    newState.push({
                        id: workers[worker].id,
                        firstname: workers[worker].firstname,
                        lastname: workers[worker].lastname,
                        job: workers[worker].job
                    });
                }

            }
            setWorker(newState)
        });
    });
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo} />
                        <Card.Body>
                            <Card.Title>{worker.id}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>

    );
}

export default DetailWorker;
