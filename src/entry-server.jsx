import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Header from './layout/header'
import Footer from './layout/footer'
import Inicio from './components/Inicio'


export function render(data) {
  const html = ReactDOMServer.renderToString(
    <>
    <Header/>
      <Inicio data={data}/>
    <Footer/>
    </>
  )
  return { html }
}