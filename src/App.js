import React, { Component } from 'react'

import './App.css';
import Navegation from "./Componentes/Navegation";
import TaskForm from "./Componentes/TaskForm";
import { todos } from './todos.json';
import Particles from 'react-particles-js';


console.log(todos);
class App extends Component {



  constructor() {
    super();

    this.state = {
      titulo: "Aplicación de Tareas",
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
        <Particles className="particles"
          params={{
            "particles": {
              "number": {
                "value": 160,
                "density": {
                  "enable": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "speed": 4,
                  "size_min": 0.3
                }
              },
              "line_linked": {
                "enable": false
              },
              "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse"
                }
              },
              "modes": {
                "bubble": {
                  "distance": 250,
                  "duration": 2,
                  "size": 0,
                  "opacity": 0
                },
                "repulse": {
                  "distance": 400,
                  "duration": 4
                }
              }
            }
          }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >

          <Navegation titulo={this.state.titulo} numeroTareas={this.state.tareas.length} />

          <div className="container">

            <div className="row">
              <div className="col-sm-4">
                <TaskForm addTask={this.addTask} />
              </div>
              <div className="col-sm-8">
                <div className="scrol row mt-4" >
                  {lista}
                </div>
              </div>
            </div>


          </div>

        </div>

      </div>
    );
  }
}

export default App;
