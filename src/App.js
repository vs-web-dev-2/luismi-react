import logo from './logo.svg';
import './App.css';
import ListaDivisas from './components/ListaDivisas';

function App() {
  const nombre = 'Luismi';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola {nombre}</h1>
        <ListaDivisas frase="Lista de divisas" />
      </header>
    </div>
  );
}

export default App;
