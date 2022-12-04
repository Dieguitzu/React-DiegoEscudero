import './App.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Router from "./app/Router";
import Provider from './app/Provider';
import React from 'react';


const App = () => (
    <Provider>
      <Router /> 
    </Provider>

  );

export default App;