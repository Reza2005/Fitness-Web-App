import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Opsional

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Langsung render <App /> */}
    <App />
  </React.StrictMode>
);