import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import List from "./list";
import Add from "./Add";


export default class Index extends Component {
    render() {
        return (
           <div>
               <Router>
                   <div>
                       <hr/>
                       <Link to="/services"></Link> &nbsp;
                       <Link to="/services/add"></Link>

                       <Route exact path="/services" component={List} />
                       <Route exact path="/services/add" component={Add} />
                   </div>
               </Router>
           </div>
        );
    }
}
