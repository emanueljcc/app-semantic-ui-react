import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import App from "../App";
import New from "../pages/New";
import Nav from "../components/Nav"
import View from "../pages/View"

export default function BasicExample() {
    return (
        <Router>
            <Nav />
            <Route exact path="/:id" component={View} />
            <Route exact path="/" component={App} />
            <Route exact path="/new" component={New} />
        </Router>
    );
}
