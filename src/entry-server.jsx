import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Header from './layout/header'
import Footer from './layout/footer'
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'
import Viajes from './components/Viajes'
import Testimonios from './components/Testimonios'
import Viaje from './components/Viaje'

export function render(data) {
  const html = ReactDOMServer.renderToString(
    <>
      <Header />
      {data.view === "inicio" ? <Inicio data={data} /> : null}
      {data.view === "nosotros" ? <Nosotros /> : null}
      {data.view === "viajes" ? <Viajes data={data} /> : null}
      {data.view === "testimonios" ? <Testimonios data={data} /> : null}
      {data.view === "viaje" ? <Viaje data={data} /> : null}
      <Footer />
    </>
  )
  return { html }
}