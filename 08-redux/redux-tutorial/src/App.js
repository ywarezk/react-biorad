import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
// import store ...
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <Header />
        <Login />

        <TodoList />
      </Provider>
      
    </div>
  );
}

export default App;
