import React from 'react';

class Divisa extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                {this.props.nombre}: {this.props.valor}   {this.props.valorMenos1}
            </li>
        );
    }
}
export default Divisa;