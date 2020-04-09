import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
Gasto.propTypes={
    gasto: PropTypes.object.isRequired
}
export default Gasto
