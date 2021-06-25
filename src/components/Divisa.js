import React from 'react';
import './Divisa.css';

class Divisa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resaltado: false
        }
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick() {
        const nuevoResaltado = !this.state.resaltado;
        this.setState({ resaltado: nuevoResaltado })
    }

    render() {
        return (
            <li
                className={this.state.resaltado ? 'resaltado' : ''}
                onClick={this.handlerClick}>
                {this.props.nombre}: {this.props.valor}   {this.props.valorMenos1}
            </li>
        );
    }
}
export default Divisa;