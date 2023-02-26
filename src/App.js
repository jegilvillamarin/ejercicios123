import logo from './logo.svg';
import './App.css';
import ContenedorContacto from './components/ContenedorContacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContenedorContacto />
      </header>
    </div>
  );
}

export default App;
