import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Formulario extends Component {

    // refs para los campos del formulario
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    crearGasto=(e)=>{
        //Prevenir el default
        e.preventDefault();

        // crear el objeto con los datos
        const gasto ={
            nombreGasto : this.nombreGasto.current.value,
            cantidadGasto : this.cantidadGasto.current.value
        }
        // console.log(gasto);
        
        // agregarlo y enviarlo por props
        this.props.agregarGasto(gasto);

        // resetear el formulario (opcional)
        e.currentTarget.reset();

    }
   
   
    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input type="text" ref={this.nombreGasto} className="u-full-width" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input type="text" ref={this.cantidadGasto} placeholder=" Ej. 300" className="u-full-width"/>
                </div>
                <input type="submit" value="Agregar" className="button-primary u-full-width"/>
            </form>
        )
    }
}
Formulario.propTypes={
    agregarGasto: PropTypes.func.isRequired
}
export default Formulario
