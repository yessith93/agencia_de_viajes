import fs from 'node:fs/promises'
import { Testimonial } from '../models/testimonios.js'

async function saveTestimonioController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
    try {
        const url = req.originalUrl.replace(base, '')
        let template
        let render
        if (!isProduction) {
          // Always read fresh template in development
          template = await fs.readFile('./index.html', 'utf-8')
          template = await vite.transformIndexHtml(url, template)
          render = (await vite.ssrLoadModule('/src/testimonios-server.jsx')).render
        } else {
          template = templateHtml
          render = (await import('./dist/server/testimonios-server.js')).render
        }
        const title ="Testimonios";
        const errores = [];
        const {nombre,correo, mensaje } = req.body
        if(nombre.trim() === ""){
            errores.push("Nombre no puede estar vacio")
        }
        if(correo.trim() === ""){
            errores.push("Correo no puede estar vacio")
        }
        if(mensaje.trim() === ""){
            errores.push("Mensaje no puede estar vacio")
        }
        if (errores.length > 0) {
          const data = {
            title,
            data: {
              errores, 
              nombre,
              correo,
              mensaje
            },
          }
          const rendered = await render(data, ssrManifest)
          const html = template
          .replace(`<!--app-html-->`, rendered.html ?? '')
          .replace(`<!--app-title-->`, title ?? '')
          res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
        }
        else{
          try {
            await Testimonial.create({
              nombre,
              correo,
              mensaje
            })
            res.redirect('/testimonios');
          } catch (e) {
            vite?.ssrFixStacktrace(e)
            console.log(e.stack)
            res.status(500).end(e.stack)
          }
        } 
      }catch (e) {
          vite?.ssrFixStacktrace(e)
          console.log(e.stack)
          res.status(500).end(e.stack)
        }
}
export default saveTestimonioController;