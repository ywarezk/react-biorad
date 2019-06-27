import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import {Provider} from 'react-redux';
import store from './redux/store';


function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <div className="App">
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
        </BrowserRouter>
      </Provider>


  );
}

export default App;
