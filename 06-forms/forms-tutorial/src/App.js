import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginFunction from './components/LoginFunction/LoginFunction';
import LoginClass from './components/LoginClass/LoginClass';
import RegisterClass from './components/RegisterClass/RegisterClass';
import LoginHooks from './components/LoginHooks/LoginHooks';
import LoginFormik from './components/LoginFormik/LoginFormik';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1> Function components </h1>

            <LoginFunction />
            <LoginHooks />


            <h3>Formik</h3>
            <LoginFormik />
          </div>

          <div className="col-6">
            <h1> Class components </h1>

            <LoginClass />

            <RegisterClass />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
