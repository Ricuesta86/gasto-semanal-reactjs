import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';

class App extends Component {

  state={
    presupuesto:'',
    restante:'',
    gastos:{}  
  }

  // agregar un nuevo gasto el state
  agregarGasto=gasto=>{
    // tomar una copia del state actual
    const gastos={...this.state.gasto};

    // agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`]=gasto;

    // console.log(gastos);
    
    //ponerlo en el state 
    this.setState({
      gastos
    });

  }


  render(){
    return (
      <div className="App container">
          <Header 
          titulo="Gasto Semanal"
          />
          <div className="contenido-principal contenido">
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  agregarGasto = {this.agregarGasto}
                />
              </div>
              <div className="one-half column">
                <Listado 
                  gastos={this.state.gastos}
                />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
 