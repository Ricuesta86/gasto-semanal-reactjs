import React, { Component } from 'react'

export class Formulario extends Component {

    // refs para los c~
   crearGasto=(e)=>{
        e.preventDefault();

   }
   
   
    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input type="text" className="u-full-width" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input type="text" placeholder=" Ej. 300" className="u-full-width"/>
                </div>
                <input type="submit" value="Agregar" className="button-primary u-full-width"/>
            </form>
        )
    }
}

export default Formulario
