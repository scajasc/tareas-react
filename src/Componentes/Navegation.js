import React, { Component } from 'react'

export default class Navegation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        {this.props.titulo} -
                        <span className="badge badge-pill badge-light ml-2">{this.props.numeroTareas}</span>
                    </a>
                </nav>
            </div>
        )
    }
}
