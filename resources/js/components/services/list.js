import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class List extends Component {
    render() {
        return (
            <div className="container">
                <h2>Listado de servicios</h2>

                <div className="text-right">
                    <Link className="btn btn-primary" to="/services/add">Adicionar</Link>
                </div>
                <br/>
                <div className="row justify-content-center">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
