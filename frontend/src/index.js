import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = 'http://localhost:8000/';
root.render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
);
reportWebVitals();
