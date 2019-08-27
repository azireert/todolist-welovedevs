import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './index.css';
import List from './views/List/List';
import DetailWorker from './views/DetailWorker/DetailWorker';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from "./store/configureStore";
import {Provider} from "react-redux";
import Header from "./views/Header/Header";

const routing = (
    <Provider store={Store}>
    <Router>
        <Header/>
        <div>
            <Switch>
            <Route exact path="/" component={List} />
            <Route path="/List" component={List} />
            <Route path="/Details/:id" component={DetailWorker} />
            <Route component={List} />
            </Switch>
        </div>
    </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
