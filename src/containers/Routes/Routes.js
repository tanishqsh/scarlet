import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "../Home/Home";
import About from "../About/About";

function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    <Home/>
                </Route>
                <Route exact path={'/home'}>
                    <Home/>
                </Route>
                <Route exact path={'/about'}>
                    <About/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;