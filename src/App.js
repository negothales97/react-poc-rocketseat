import React from 'react';
import api from './services/api'
import Routes from './routes';

import './style.css'

import Header from './components/Header'
import Main from './pages/main'
import { Route } from 'react-router-dom';
const App = () => (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
)

export default App;
