import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <div>Titulo</div>
        <input type='button' value="+" className="App-button"></input>
      </main>
    </div>
  );
}

export default App;
