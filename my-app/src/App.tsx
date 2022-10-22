import logo from "./logo.svg";
import "./App.css";
import { MyApp } from "./MyApp";

function App() {
  return (
    // <></> berarti sebuah fragment untuk membungkus sebuah tag html
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MyApp title="HOOKS" />
      </div>
    </>
  );
}

export default App;
