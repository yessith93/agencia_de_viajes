import fs from 'node:fs/promises'
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
  export { getTemplate, getRender, renderPage };