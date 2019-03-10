import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


import Home from "./Home";
import ServicesList from "./services/Index";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>

                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">Doña Beidys</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto text-right">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>

                            </ul>
                        </div>
                    </nav>




                    <Route exact path="/" component={Home}/>
                    <Route exact path="/services" component={ServicesList}/>
                </div>
            </Router>


        );
    }
}

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}




