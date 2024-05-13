import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Viajes from './components/Viajes'
import Header from './layout/header'
import Footer from './layout/footer'

export function render(viajes) {
  const html = ReactDOMServer.renderToString(
    <>
    <Header/>
      <Viajes viajes={viajes}/>
    <Footer/>
    </>
  )
  return { html }
}