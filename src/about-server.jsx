import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import About from './About'

export function render(data="") {
  const html = ReactDOMServer.renderToString(
      <About data={data}/>
  )
  return { html }
}