import React from 'react';
import Teste from './components/Teste';
import AdminPage from './pages/admin/AdminPage';
import "./style-main.css";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Página Inicial</h1>
      <BrowserRouter>
        <Link to="/admin"><h2>Acessar Login</h2></Link>
        <Switch>
          <Route path="/sobre" exact="true" component={Teste} />
          <Route path="/admin" component={AdminPage} />
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
