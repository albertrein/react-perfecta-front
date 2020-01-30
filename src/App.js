import React from 'react';
import Teste from './components/Teste';
import AdminPage from './pages/admin/AdminPage';
import ReactDOM from 'react-dom';
import "./style-main.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/sobre" exact="true" component={Teste} />
          <Route path="/admin" component={AdminPage} />
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
