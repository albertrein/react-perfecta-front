import React from 'react';
import Teste from './components/Teste';
import AdminPage from './pages/admin/AdminPage';
import ReactDOM from 'react-dom';
import "./style-main.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <Route path="/admin" exact="true" component={AdminPage} />
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
