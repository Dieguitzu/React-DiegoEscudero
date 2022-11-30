import './App.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Router from "./app/Router";
import ShowState from './pages/ShowState';
import Provider from './app/Provider';
import Login from './pages/Login';
import React from 'react';


const App = () => (
    <Provider>
      <Router /> 
      <Login />
      <ShowState />
    </Provider>

  );

export default App;