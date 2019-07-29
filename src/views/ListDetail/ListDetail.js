import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import React from 'react';
import logo from '../../avatar.jpg';
import './ListDetail.css';

class ListDetail extends React.Component{
    delete(id){
        this.props.delete(id);
    }
    render() {
        const workers = this.props.workers;
        const listItems = workers.map((workers) =>
            <Card  key={workers.id} style={{ width: '18rem', marginBottom: '2em' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{workers.firstname} {workers.lastname}</Card.Title>
                    <Card.Text>
                        {workers.job}
                    </Card.Text>
                    <Button onClick={this.delete.bind(this, workers.id)} variant="primary">Supprimer</Button>
                </Card.Body>
            </Card>
        );
        return (
            listItems
        );
    }

}

export default ListDetail;



