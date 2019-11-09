import React from 'react';
import "./index.css";
import Navbar from './Navbar';
import Hero from './Hero';
import WorkStreams from './WorkStreams';
import OurTeam from './OurTeam';
import $ from "jquery"
import WOW from "wowjs/dist/wow.js";
import "bootstrap/dist/css/bootstrap.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";

class App extends  React.Component {

    render() {
        return (

            <Router>
                <Switch>
                    <Route path="/ContactUs">
                        <ContactUs/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>

        );
    }
}

export default App;
