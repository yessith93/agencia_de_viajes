import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
let data;
if (typeof window !== 'undefined') {
  data = window.__data__;
}
ReactDOM.hydrateRoot(
  document.getElementById('root'),
    <App />
)