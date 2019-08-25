import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../avatar.jpg';
import './ListDetail.css';

function ListDetail (props){
    function deleteWorker(id){
        props.delete(id);
    }
        const workers = props.workers;
        const listItems = workers.map((workers) =>
            <Card  key={workers.id} style={{ width: '18rem', marginBottom: '2em' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{workers.firstname} {workers.lastname}</Card.Title>
                    <Card.Text>
                        {workers.job}
                    </Card.Text>
                    <Button onClick={deleteWorker.bind(this, workers.id)} variant="primary">Supprimer</Button>
                    <Link to={ 'Details/'+workers.id}>
                    <Button style={{marginLeft : '1em'}} to={ 'Details/' + workers.id} variant="primary">Détails</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
        return (
            listItems
        );

}

export default ListDetail;



