import express from "express";
import app from './../app.js'
import fs from 'node:fs/promises'

const router = express.Router();
// Constants
const isProduction = process.env.NODE_ENV === 'production'
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined


// Add Vite or respective production middlewares
let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
}

router.get('/about', async (req, res) => {
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
})

router.get('/test3', async (req, res) => {
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
      rendered.component ="/src/entry-client.jsx";
      const html = template
        .replace(`<!--app-head-->`, rendered.head ?? '')
        .replace(`<!--app-html-->`, rendered.body ?? '')
        .replace(`<!--app-component-->`, rendered.component ?? '')
      console.log(rendered)
      res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
    } catch (e) {
      vite?.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })
router.get('/', async (req, res) => {
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
})
router.get('/nosotros', async (req, res) => {
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
})
router.get('/testimonios', async (req, res) => {
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
})
router.get('/viajes', async (req, res) => {
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
})

export default router;