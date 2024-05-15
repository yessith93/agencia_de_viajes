import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Header from './layout/header'
import Footer from './layout/footer'
import Testimonios from './components/Testimonios'

export function render(data) {
  const html = ReactDOMServer.renderToString(
    <>
    <Header/>
      <Testimonios data={data} />
    <Footer/>
    </>
  )
  return { html }
}