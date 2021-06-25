import React from 'react';
import './ListaDivisas.css'
import Divisa from './Divisa';


class ListaDivisas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            divisas: {},
            fecha: '',
        }
    }

    componentDidMount() {
        const url = "https://api.frankfurter.app/latest";
        fetch(url) //Promise < Response >
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    divisas: data.rates,
                })
            })
    }

    renderDivisas() {
        return Object.keys(this.state.divisas).map((divisa) => {
            return <Divisa
                key={divisa}
                nombre={divisa}
                valor={this.state.divisas[divisa]}
                valorMenos={(1 / this.state.divisas[divisa]).toFixed(4)}
            />
        });
    }

    render() {
        const divisas = this.renderDivisas();
        return (
            <div className="lista-divisas">
                <h2>{this.props.frase}</h2>
                <p>{divisas}</p>
            </div>
        )
    }
}

export default ListaDivisas;