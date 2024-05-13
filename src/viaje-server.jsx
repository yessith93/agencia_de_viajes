import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Viaje from './components/viaje'
import Header from './layout/header'
import Footer from './layout/footer'

export function render(data) {
  const html = ReactDOMServer.renderToString(
    <>
    <Header/>
      <Viaje data={data}/>
    <Footer/>
    </>
  )
  return { html }
}