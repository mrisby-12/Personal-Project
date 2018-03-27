import React from 'react';
import ReactDOM from 'react-dom';
// import Bootstrap from 'react-bootstrap';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import {HashRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <App />
  </Router>
, document.getElementById('root'));

