import logo from './logo.svg';
import './App.css';
import ListaDivisas from './components/ListaDivisas';
import { useState } from 'react';

function App() {

  const [nombre, setNombre] = useState('Luismi');
  const [vistavisible, setVistaVisible] = useState(false);

  const cambiaVisibilidadLista = () => {
    setVistaVisible(!vistavisible);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola {nombre}</h1>
        <button onClick={cambiaVisibilidadLista}>Muestra / oculta Listado</button>
        {
          vistavisible &&
          <ListaDivisas frase="Lista de divisas" />
        }
      </header>
    </div>
  );
}

export default App;
