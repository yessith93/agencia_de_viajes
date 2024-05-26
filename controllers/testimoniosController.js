import { Testimonial } from '../models/testimonios.js'
import { getTemplate, getRender, renderPage } from './helpers.js';

async function saveTestimonioController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
    try {
        const url = req.originalUrl.replace(base, '')
        
        const testimonios = await Testimonial.findAll();
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
            view: "testimonios",
            title,
            data: {
              errores, 
              nombre,
              correo,
              mensaje,
              testimonios
            },
          }
          renderPage(res, url, isProduction, vite, templateHtml, ssrManifest, base, data, title);
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