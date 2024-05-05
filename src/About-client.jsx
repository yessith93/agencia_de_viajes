import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './About'

let data;
if (typeof window !== 'undefined') {
  data = window.__data__;
}
ReactDOM.hydrateRoot(
  document.getElementById('root'),
      <About data={data}/>
)