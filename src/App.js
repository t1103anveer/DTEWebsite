import React from 'react';
import "./index.css";
import $ from "jquery"
import WOW from "wowjs/dist/wow.js";
import "wowjs/css/libs/animate.css"
import "bootstrap/dist/css/bootstrap.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
import BoardMembers from "./BoardMembers";
import NewsEvents from "./NewsEvents";

class App extends  React.Component {

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {

        return (

            <Router>
                <Switch>
                    <Route path="/NewsEvents">
                        <NewsEvents/>
                    </Route>
                    <Route path="/BoardMembers">
                        <BoardMembers/>
                    </Route>
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
