import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return (
        <Navbar style={{ marginBottom: '2rem' }} bg="dark" variant="dark">
            <Navbar.Brand href="#home">ToDoList</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Réalisé par: Antonin Catrix
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
