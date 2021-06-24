import React from 'react';

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
            return <li key={divisa}>{divisa}: {this.state.divisas[divisa]}</li>
        });
    }

    render() {
        const divisas = this.renderDivisas();
        return (
            <div>
                <h2>{this.props.frase}</h2>
                <p>{divisas}</p>
            </div>
        )
    }
}

export default ListaDivisas;