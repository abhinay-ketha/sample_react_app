import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
 
import Login from './Login';
import Dashboard from './Dashboard';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;