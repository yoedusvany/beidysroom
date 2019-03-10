import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from "./Footer";
import List from "./services/list";
import Home from "./Home";


export default class Index extends Component {
    render() {
        return (
           <div className="container">
               <Header/>

               <br/>
               <br/>

               <Footer/>
           </div>
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}




