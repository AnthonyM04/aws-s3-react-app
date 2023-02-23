import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {
  console.log(process.env.REACT_APP_API_ENDPOINT)

  useEffect(() => {
    fetch(process.res)
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Hey class
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
