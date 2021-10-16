import React from 'react';
import ReactDOM from 'react-dom';
import './global.css'
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './components/context/AuthContext'

ReactDOM.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
document.getElementById('root')
);
