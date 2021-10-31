import React from 'react';
import './Content.css';
import { Route, Switch } from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
const Content = props => (
    <main className="content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </main>
);

export default Content;