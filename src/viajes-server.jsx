import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './components/App'
import Header from './layout/header'
import Footer from './layout/footer'

export function render() {
  const html = ReactDOMServer.renderToString(
    <>
    <Header/>
      <App />
    <Footer/>
    </>
  )
  return { html }
}