import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Clients from "../Clients/Clients";

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
                <Route exact path={'/contact'}>
                    <Contact/>
                </Route>
                <Route exact path={'/services'}>
                    <Services/>
                </Route>
                <Route exact path={'/clients'}>
                    <Clients/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;