import React, { Component } from 'react'

import './App.css';
import Navegation from "./Componentes/Navegation";
import TaskForm from "./Componentes/TaskForm";
import { todos } from './todos.json';


console.log(todos);
class App extends Component {



  constructor() {
    super();

    this.state = {
      titulo: "Aplicacion de Tareas",
      tareas: todos,
      numeroTareas: todos.length
    }
    //this.removeTask = this.removeTask.bind(this);
  }

  addTask = (tarea) => {
    console.log(tarea);
    this.setState({
      tareas: [...this.state.tareas, tarea]
    });
  }

  removeTask(index) {
    console.log(index);
     this.setState({
      tareas: this.state.tareas.filter((e, i) => {
        return i !== index;
      })
    }); 
  }

  render() {

    const lista = this.state.tareas.map((tarea, i) => {
      return (

        <div className="col-md-4" key={i} >
          <div className="card mt-4 text-center" >
            <div className="card-header">
              <h3>{tarea.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">{tarea.prioridad}</span>
            </div>
            <div className="card-body">
              <p>{tarea.descripcion}</p>
              <p><mark>{tarea.responsable}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" title="Eliminar tarea" onClick={() => this.removeTask(i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>

      );
    });

    return (
      <div className="App">

        <Navegation titulo={this.state.titulo} numeroTareas={this.state.numeroTareas} />

        <div className="container">

          <div className="row">
            <div className="col-sm-4">
              <TaskForm addTask={this.addTask} />
            </div>
            <div className="col-sm-8">
              <div className="row" >
                {lista}
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default App;
