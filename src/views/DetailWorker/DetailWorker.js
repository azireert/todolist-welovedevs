import React, {useEffect} from 'react';
import './DetailWorker.css';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import logo from '../../avatar.jpg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {fetchToDo} from "../../actions";
import {connect} from "react-redux";

const DetailWorker = (props) => {
    const { params } = props.match;
    const worker = props.workers[params.id];

    useEffect(() => {
        if(!props.hasReceivedWorkers) {
            props.fetchToDo(params.id)
        }
    },[props.hasReceivedWorkers]);

    if(!worker) {
        return "loading..";
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

const mapStateToProps = ({workersReducers, userReducer}) => {
    return {
        workers: workersReducers.workers,
        currentUser: userReducer.firebaseUser
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchToDo
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(DetailWorker);
