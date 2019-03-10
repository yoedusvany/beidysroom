import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Example extends Component {
    render() {
        return (
            <div className="container">

                <h2>Adicionar servicio</h2>

                <div className="text-right">
                    <Link className="btn btn-primary" to="/services">Regresar</Link>
                </div>
                <br/>


                <div className="card">
                    <div className="card-header">Add Service Component</div>

                    <div className="card-body">
                        add service
                    </div>
                </div>
            </div>
        );
    }
}
