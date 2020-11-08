import React, { Component } from 'react';

class TaskForm extends Component {
    state = {
        titulo: "",
        responsable: "",
        descripcion: "",
        prioridad: "Baja"
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTask(this.state);
        this.onReset();
    }

    onReset() {
        this.setState({
            titulo: "",
            responsable: "",
            descripcion: "",
            prioridad: "Baja"
        });
    }

    render() {
        return (

            <div className="card mt-4 text-center" >
                <form onSubmit={this.onSubmit}>
                    <div className="card-header">
                        <h3>Agregar Tarea</h3>
                    </div>
                    <div className="card-body">


                        <div className="form-group">
                            <input class="form-control" type="text" placeholder="Título" value={this.state.titulo} onChange={this.onChange} name="titulo"></input>
                        </div>
                        <div className="form-group">
                            <input class="form-control" type="text" placeholder="Responsable" value={this.state.responsable} onChange={this.onChange} name="responsable"></input>
                        </div>
                        <div className="form-group">
                            <input class="form-control" type="text" placeholder="Descripción" value={this.state.descripcion} onChange={this.onChange} name="descripcion"></input>
                        </div>

                        <div className="form-group">
                            <select
                                name="prioridad"
                                className="form-control"
                                value={this.state.prioridad}
                                onChange={this.onChange}
                            >
                                <option>Baja</option>
                                <option>Media</option>
                                <option>Alta</option>
                            </select>
                        </div>

                    </div>
                    <div className="card-footer">
                        <button className="btn btn-secondary">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>

        );
    }
}

export default TaskForm;