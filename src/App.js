import React from 'react';
import './App.css';
import './App.css';
import List from "./views/List/List";
import Header from "./views/Header/Header";
import Container from 'react-bootstrap/Container'

class App extends React.Component {
  render() {
    return (
        <div>
          <Header/>
          <Container>
            <List/>
          </Container>
        </div>
    );
  }
}

export default App;
