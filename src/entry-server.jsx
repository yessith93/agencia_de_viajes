import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import About from './About'

export function render() {
  const html = ReactDOMServer.renderToString(
      <App />
  )
  return { html }
}