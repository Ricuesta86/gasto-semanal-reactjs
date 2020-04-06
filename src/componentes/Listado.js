import React, { Component } from 'react'

export class Listado extends Component {
    render() {
        return (
            <div>
                <div className="gastos-realizados">
                    <h2>Listado</h2>
                    {console.log(this.props.gastos)};                    
                </div>
            </div>
        )
    }
}

export default Listado
