import logo from "./logo.png";
import InputComponent from "./InputComponent";
import Notas from "./Notas";
import "./App.css";

function App() {
  const handleButtonClick = () => {};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="nav">
          <ul>
            <li><a href="">Notas</a></li>
            <li><a href="">Progreso</a></li>
            <li><a href="">Tablas</a></li>
          </ul>
        </div>
      </header>
      <main>
        <Notas />
      </main>
    </div>
  );
}

export default App;
