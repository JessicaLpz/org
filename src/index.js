import React from 'react';  //esto es de la biblioteca de react//
import ReactDOM from 'react-dom/client'; //esto nos ayuda a trabajar con react y con el DOM//
import './index.css'; //algunos estillo//
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
