import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Nosotros from './components/nosotros'
import Header from './layout/header'
import Footer from './layout/footer'

export function render(props) {
  const html = ReactDOMServer.renderToString(
    <>
    <Header/>
      <Nosotros title={props.title} />
    <Footer/>
    </>
  )
  return { html }
}