import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './content/App';
import Canvas from './three-scene/Canvas';
import reportWebVitals from './reportWebVitals';

const canvas = ReactDOM.createRoot(document.getElementById('canvas'));
canvas.render(
  <React.StrictMode>
    <Canvas />
  </React.StrictMode>
);

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
