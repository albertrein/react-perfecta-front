import React from 'react';
import Teste from './components/Teste';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <BrowserRouter>
        <Switch>
          <Route path="/sobre" exact="true" component={Teste} />
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
