import React, { Component } from 'react'

export class Gasto extends Component {
    render() {
        const {cantidadGasto,nombreGasto}=this.props.gasto;
        return (
            <li className="gasto">
                <p>
                    {nombreGasto}
                    <span className="gasto">$  {cantidadGasto}</span>
                </p>
            </li>
        )
    }
}

export default Gasto
