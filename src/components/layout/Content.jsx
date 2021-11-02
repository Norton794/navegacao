import React from 'react';
import './Content.css';
import { Route, Switch } from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
const Content = props => (
    <main className="content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                <Param/>
            </Route>

            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </main>
);

export default Content;