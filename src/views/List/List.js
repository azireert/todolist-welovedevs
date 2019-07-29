import React from 'react';
import './List.css';
import ListDetail from "../ListDetail/ListDetail";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class List extends React.Component{
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
    }

    delete(id){
        console.log(id);
        this.setState(prevState => ({
            list: prevState.list.filter(el => el.id !== id )
        }));

    }

    render() {
        return (
            <Row>
                <Col></Col>
                <Col><ListDetail delete={this.delete} workers={this.state.list}/></Col>
                <Col></Col>
            </Row>
        );
    }
}

export default List;
