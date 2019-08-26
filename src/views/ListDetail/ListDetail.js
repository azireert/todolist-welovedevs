import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../avatar.jpg';
import './ListDetail.css';

const ListDetail = (props) => {
    function deleteWorker(id){
        props.delete(id);
    }
        const workers = props.workers;
        if (workers !== null) {
            const listItems = Object.keys(workers).map((item, i) => (
                <Card key={workers[item].id} style={{width: '18rem', marginBottom: '2em'}}>
                    <Card.Img variant="top" src={logo}/>
                    <Card.Body>
                        <Card.Title>{workers[item].firstname} {workers[item].lastname}</Card.Title>
                        <Card.Text>
                            {workers[item].job}
                        </Card.Text>
                        <Button onClick={deleteWorker.bind(this, workers[item].id)} variant="primary">Supprimer</Button>
                        <Link to={'Details/' + workers[item].id}>
                            <Button style={{marginLeft: '1em'}} variant="primary">Détails</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ));


            return (
                listItems
            );
        }else {
            return (
                <div>lol il y a rien</div>
            )
        }

}

export default ListDetail;



