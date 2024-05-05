import React from 'react'
import ReactDOMServer from 'react-dom/server'
import NiboBar from './components/nivo-bar'

export function render() {
  const html = ReactDOMServer.renderToString(
      <NiboBar />
  )
  return { html }
}