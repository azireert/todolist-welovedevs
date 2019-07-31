import React from 'react';
import './App.css';
import './App.css';
import List from "./views/List/List";
import Header from "./views/Header/Header";
import Container from 'react-bootstrap/Container'
import { Provider } from 'react-redux'
import Store from './store/configureStore'

class App extends React.Component {
  render() {
    return (
        <Provider store={Store}>
          <Header/>
          <Container>
            <List/>
          </Container>
        </Provider>
    );
  }
}

export default App;
