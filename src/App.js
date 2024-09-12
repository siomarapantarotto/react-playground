// Prefer to put any site-wide images used in many different places inside the public folder.
//import logo from './logo.svg'; // File moved from src to public folder
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />*/} {/* 1st way to work with images */}
        <img src='/logo.svg' className="App-logo" alt="logo" />   {/* 2nd way to work with images */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React & Firebase
        </a>
      </header>
    </div>
  );
}

export default App;
