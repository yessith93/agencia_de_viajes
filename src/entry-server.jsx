import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Header from './layout/header'
import Footer from './layout/footer'
import Inicio from './components/Inicio'


export function render() {
  const html = ReactDOMServer.renderToString(
    <>
    <Header/>
      <Inicio />
    <Footer/>
    </>
  )
  return { html }
}