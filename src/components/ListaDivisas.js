import React from 'react';
import './ListaDivisas.css';
import Divisa from "./Divisa";

class ListaDivisas extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            divisas: {},
            fecha: '',
            cantidad: 0,
            valorConvertido: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClickHijo = this.handleClickHijo.bind(this);
    }

    componentDidMount() {
        const url = "https://api.frankfurter.app/latest";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    divisas: data.rates,
                })
            });
    }

    handleChange(event) {
        this.setState({
            cantidad: event.target.value
        });
    }
    handleClickHijo(valor) {
        this.setState({
            valorConvertido: this.state.cantidad * valor
        });
    }

    renderDivisas() {
        return Object.keys(this.state.divisas).map((divisa) => {
            return <Divisa
                key={divisa}
                nombre={divisa}
                valor={this.state.divisas[divisa]}
                handleClickPadre={this.handleClickHijo}
            />
        });
    }

    render() {
        const divisas = this.renderDivisas();
        return (
            <div className="lista-divisas">
                <h2>{this.props.frase}</h2>
                <input type="number" value={this.state.cantidad} onChange={this.handleChange} />
                <br />
                El valor convertido es: {this.state.valorConvertido}
                <br />
                <p>{divisas}</p>
            </div>
        )
    }
}
export default ListaDivisas;