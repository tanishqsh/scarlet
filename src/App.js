import React from 'react';
import './App.css';
import Home from './Home';
import Terms from './Terms';
import {BrowserRouter} from 'react-router-dom'
import BottomNavigation from "./BottomNavigation";
import {Route, Switch} from "react-router-dom";
import Services from "./Services";

function App() {
    return (
        <div className="App">
            <BottomNavigation/>
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/terms'} exact component={Terms}/>
                    <Route path={'/services'} exact component={Services}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
