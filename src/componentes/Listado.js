import React, { Component } from 'react'
import Gasto from './Gasto'

export class Listado extends Component {
    render() {
        return (
            <div>
                <div className="gastos-realizados">
                    <h2>Listado</h2>
                    {/* {console.log(this.props.gastos)};    */}
                    
                    {Object.keys(this.props.gastos).map(key=>(
                        <Gasto 
                            key={key}
                            gasto = {this.props.gastos[key]}
                        />
                    ))}
                                    
                </div>
            </div>
        )
    }
}

export default Listado
