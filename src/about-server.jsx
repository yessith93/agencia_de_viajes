import React from 'react'
import ReactDOMServer from 'react-dom/server'
import About from './components/About'

export function render(data="") {
  const html = ReactDOMServer.renderToString(
      <About data={data}/>
  )
  return { html }
}