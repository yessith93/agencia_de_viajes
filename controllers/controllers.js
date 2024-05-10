import fs from 'node:fs/promises'

async function aboutController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
    try {
        const url = req.originalUrl.replace(base, '')
    
        let template
        let render
        if (!isProduction) {
          // Always read fresh template in development
          template = await fs.readFile('./public/src/About.html', 'utf-8')
          template = await vite.transformIndexHtml(url, template)
          render = (await vite.ssrLoadModule('/src/about-server.jsx')).render
        } else {
          template = templateHtml
          render = (await import('./dist/server/entry-server.js')).render
        }
        const data ='test';
        const script = `<script>window.__data__=${JSON.stringify(data)}</script>`;
        const rendered = await render(data, ssrManifest)
    
        const html = template
          .replace(`<!--app-head-->`, rendered.head ?? '')
          .replace(`<!--app-html-->`, rendered.html + script?? '')
        res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
      } catch (e) {
        vite?.ssrFixStacktrace(e)
        console.log(e.stack)
        res.status(500).end(e.stack)
      }
}
async function inicioController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
    try {
        const url = req.originalUrl.replace(base, '')
    
        let template
        let render
        if (!isProduction) {
          // Always read fresh template in development
          template = await fs.readFile('./index.html', 'utf-8')
          template = await vite.transformIndexHtml(url, template)
          render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
        } else {
          template = templateHtml
          render = (await import('./dist/server/entry-server.js')).render
        }
        
        const rendered = await render(url, ssrManifest)
        const cssFile ="Inicio";
        const html = template
        .replace(`<!--app-html-->`, rendered.html ?? '')
        .replace(`<!--app-title-->`, cssFile ?? '')
        res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
      } catch (e) {
        vite?.ssrFixStacktrace(e)
        console.log(e.stack)
        res.status(500).end(e.stack)
      }
}
async function nosotrosController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
    try {
        const url = req.originalUrl.replace(base, '')
    
        let template
        let render
        if (!isProduction) {
          // Always read fresh template in development
          template = await fs.readFile('./index.html', 'utf-8')
          template = await vite.transformIndexHtml(url, template)
          render = (await vite.ssrLoadModule('/src/nosotros-server.jsx')).render
        } else {
          template = templateHtml
          render = (await import('./dist/server/nosotros-server.js')).render
        }
        
        const rendered = await render({title:"Nosotros"}, ssrManifest)
        const cssFile ="Nosotros";
        const html = template
        .replace(`<!--app-html-->`, rendered.html ?? '')
        .replace(`<!--app-title-->`, cssFile ?? '')
        res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
      } catch (e) {
        vite?.ssrFixStacktrace(e)
        console.log(e.stack)
        res.status(500).end(e.stack)
      }
}
async function testimoniosController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
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
        
        const rendered = await render(url, ssrManifest)
        const cssFile ="Testimonios";
        const html = template
        .replace(`<!--app-html-->`, rendered.html ?? '')
        .replace(`<!--app-title-->`, cssFile ?? '')
        res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
      } catch (e) {
        vite?.ssrFixStacktrace(e)
        console.log(e.stack)
        res.status(500).end(e.stack)
      }
}
async function viajesController(req, res, isProduction, vite, templateHtml, ssrManifest, base) {
    try {
        const url = req.originalUrl.replace(base, '')
    
        let template
        let render
        if (!isProduction) {
          // Always read fresh template in development
          template = await fs.readFile('./index.html', 'utf-8')
          template = await vite.transformIndexHtml(url, template)
          render = (await vite.ssrLoadModule('/src/viajes-server.jsx')).render
        } else {
          template = templateHtml
          render = (await import('./dist/server/viajes-server.js')).render
        }
        
        const rendered = await render(url, ssrManifest)
        const cssFile ="Viajes";
        const html = template
        .replace(`<!--app-html-->`, rendered.html ?? '')
        .replace(`<!--app-title-->`, cssFile ?? '')
        res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
      } catch (e) {
        vite?.ssrFixStacktrace(e)
        console.log(e.stack)
        res.status(500).end(e.stack)
      }
} 
export default {aboutController,inicioController,testimoniosController,nosotrosController,viajesController};