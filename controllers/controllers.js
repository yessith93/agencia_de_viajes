import fs from 'node:fs/promises';
import { ViajesModel } from '../models/Viajes.js';
import { Testimonial } from '../models/testimonios.js';

async function getTemplate(url, isProduction, vite, templateHtml) {
  let template;
  if (!isProduction) {
    template = await fs.readFile('./index.html', 'utf-8');
    template = await vite.transformIndexHtml(url, template);
  } else {
    template = templateHtml;
  }
  return template;
}

async function getRender(isProduction, vite) {
  let render;
  if (!isProduction) {
    render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
  } else {
    render = (await import('../dist/server/entry-server.js')).render;
  }
  return render;
}

async function renderPage(res, url, isProduction, vite, templateHtml, ssrManifest, base, data, title) {
  const template = await getTemplate(url, isProduction, vite, templateHtml);
  const render = await getRender(isProduction, vite);
  const rendered = await render(data, ssrManifest);
  let html = template
    .replace('<!--app-html-->', rendered.html ?? '')
    .replace('<!--app-title-->', title ?? '');
  if(data.adicionalReplace){
    data.adicionalReplace.forEach(element=>{
      const {htmlSection,value}=element
      html=html.replace(htmlSection,value)
    })
  }
  res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
}
async function aboutController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
  try {
    const url = req.originalUrl.replace(base, '')
    await renderPage(res, url, isProduction, vite, templateHtml, ssrManifest, base, {}, 'About');
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
}
async function inicioController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
  try {
    const url = req.originalUrl.replace(base, '');
    const [viajes, testimonios] = await Promise.all([
      ViajesModel.findAll({ limit: 3 }),
      Testimonial.findAll({ limit: 3 })
    ]);
    const data = { view: 'inicio', viajes, testimonios,adicionalReplace:[
      {
        htmlSection:"<!--app-classBody-->",
        value:"home"
      }
    ]
    };
    await renderPage(res, url, isProduction, vite, templateHtml, ssrManifest, base, data, 'Inicio');
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
}

async function nosotrosController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
  try {
    const url = req.originalUrl.replace(base, '');
    const data = { view: 'nosotros', title: 'Nosotros' };
    await renderPage(res, url, isProduction, vite, templateHtml, ssrManifest, base, data, 'Nosotros');
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
}

async function testimoniosController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
  try {
    const url = req.originalUrl.replace(base, '');
    const testimonios = await Testimonial.findAll();
    const data = { view: 'testimonios', title: 'Testimonios', testimonios };
    await renderPage(res, url, isProduction, vite, templateHtml, ssrManifest, base, data, 'Testimonios');
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
}

async function viajesController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
  try {
    const url = req.originalUrl.replace(base, '');
    const viajes = await ViajesModel.findAll();
    const data = { view: 'viajes', title: 'Viajes', viajes };
    await renderPage(res, url, isProduction, vite, templateHtml, ssrManifest, base, data, 'Viajes');
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
}

async function viajeController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
  try {
    const url = req.originalUrl.replace(base, '');
    const { viaje } = req.params;
    const resultado = await ViajesModel.findOne({ where: { slug: viaje } });
    const data = { view: 'viaje', title: 'Informacion viaje', resultado };
    await renderPage(res, url, isProduction, vite, templateHtml, ssrManifest, base, data, 'Informacion del Viaje');
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
}

export default { inicioController, testimoniosController, nosotrosController, viajesController, viajeController };
