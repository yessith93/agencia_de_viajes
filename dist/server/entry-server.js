import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import "react";
import ReactDOMServer from "react-dom/server";
function Header() {
  return /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("div", { className: "navegacion", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row justify-content-center justify-content-md-between align-items-center py-4", children: [
    /* @__PURE__ */ jsx("div", { className: "col-md-4 col-6", children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: "/img/logo.svg", alt: "sitio logo" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "col_md_8", children: /* @__PURE__ */ jsxs("nav", { className: "mt-5 mt-md-0 nav justify-content-center justify-content-md-end", children: [
      /* @__PURE__ */ jsx("a", { href: "/nosotros", className: "nav-link", children: "Nosotros" }),
      /* @__PURE__ */ jsx("a", { href: "/viajes", className: "nav-link", children: "Viajes" }),
      /* @__PURE__ */ jsx("a", { href: "/testimonios", className: "nav-link", children: "Testimonios" })
    ] }) })
  ] }) }) }) });
}
function Footer() {
  let year = /* @__PURE__ */ new Date();
  year = year.getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "container py-5", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsxs("nav", { className: "mt-5 mt-md-0 nav justify-content-center justify-content-md-end", children: [
      /* @__PURE__ */ jsx("a", { href: "/nosotros", className: "nav-link", children: "Nosotros" }),
      /* @__PURE__ */ jsx("a", { href: "/viajes", className: "nav-link", children: "Viajes" }),
      /* @__PURE__ */ jsx("a", { href: "/testimonios", className: "nav-link", children: "Testimonios" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsxs("p", { className: "copyright text-center text-md-right", children: [
      "Todos los Derechos Reservados",
      /* @__PURE__ */ jsxs("span", { children: [
        " ",
        year
      ] })
    ] }) })
  ] }) });
}
function Slider() {
  return /* @__PURE__ */ jsxs("div", { className: "slider", children: [
    /* @__PURE__ */ jsx("h1", { children: "Rio de Janeiro" }),
    /* @__PURE__ */ jsx("em", { children: "aventura" })
  ] });
}
function card_viaje({ viaje }) {
  return /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-4 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
    /* @__PURE__ */ jsx("img", { className: "card-img-top", src: `img/destinos_${viaje.imagen}.jpg`, alt: "Card cap" }),
    /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
      /* @__PURE__ */ jsx("h2", { children: viaje.titulo }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsxs("svg", { className: "icon icon-tabler icon-tabler-calendar-event", xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "#dc135f", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          /* @__PURE__ */ jsx("rect", { x: "4", y: "5", width: "16", height: "16", rx: "2" }),
          /* @__PURE__ */ jsx("line", { x1: "16", y1: "3", x2: "16", y2: "7" }),
          /* @__PURE__ */ jsx("line", { x1: "8", y1: "3", x2: "8", y2: "7" }),
          /* @__PURE__ */ jsx("line", { x1: "4", y1: "11", x2: "20", y2: "11" }),
          /* @__PURE__ */ jsx("rect", { x: "8", y: "15", width: "2", height: "2" })
        ] }),
        viaje.fecha_ida,
        " - ",
        viaje.fecha_vuelta
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsxs("svg", { className: "icon icon-tabler icon-tabler-users", xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "#dc135f", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          /* @__PURE__ */ jsx("circle", { cx: "9", cy: "7", r: "4" }),
          /* @__PURE__ */ jsx("path", { d: "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" }),
          /* @__PURE__ */ jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }),
          /* @__PURE__ */ jsx("path", { d: "M21 21v-2a4 4 0 0 0 -3 -3.85" })
        ] }),
        viaje.disponibles,
        " Disponibles"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        viaje.descripcion.substr(0, 100),
        "..."
      ] }),
      /* @__PURE__ */ jsx("a", { href: `viajes/${viaje.slug}`, className: "btn btn-success btn-block", children: "Más Información" })
    ] })
  ] }) });
}
function card_viajes(props) {
  return /* @__PURE__ */ jsx("div", { className: "row proximos-viajes", children: props.viajes.map(
    (viaje) => /* @__PURE__ */ jsx(card_viaje, { viaje }, viaje.id)
  ) });
}
function Discount_section(props) {
  return /* @__PURE__ */ jsx("div", { className: "descuento", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsxs("div", { className: "contenido", children: [
    /* @__PURE__ */ jsx("h3", { children: "5% de Descuento" }),
    /* @__PURE__ */ jsx("p", { className: "titulo", children: "Viaje a Canada" }),
    /* @__PURE__ */ jsx("p", { className: "fecha", children: "20 de Marzo 2021 - 28 De Marzo 2021" }),
    /* @__PURE__ */ jsx("p", { className: "precio", children: "$2,500 USD" })
  ] }) }) }) }) });
}
function Testimonios_list(props) {
  const testimonios = props.testimonios;
  return testimonios && testimonios.map((testimonio) => /* @__PURE__ */ jsx("div", { className: "col-md-6 col-lg-4 mb-4", children: /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
    /* @__PURE__ */ jsx("blockquote", { className: "blockquote", children: /* @__PURE__ */ jsx("p", { className: "mb-0", children: testimonio.mensaje }) }),
    /* @__PURE__ */ jsx("footer", { className: "blockquote-footer", children: testimonio.nombre })
  ] }) }) }, testimonio.id));
}
function Testimonios_row(props) {
  const testimonios = props.testimonios;
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "mt-5 text-center", children: "Testimoniales" }),
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx(Testimonios_list, { testimonios }) })
  ] });
}
function Inicio(props) {
  const { data } = props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Slider, {}),
    /* @__PURE__ */ jsxs("main", { className: "container mt-5", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center mb-5", children: "Sobre Nosotros" }),
      /* @__PURE__ */ jsxs("div", { className: "row mb-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
          /* @__PURE__ */ jsx("p", { children: "Vestibulum porta nec nibh eu aliquet. Vestibulum pharetra eros dui, non varius tortor blandit id. Morbi id imperdiet nulla, eget mattis augue. Curabitur volutpat enim et ornare cursus. Nam quis purus consectetur dui semper rhoncus a vitae diam. Nam sed justo dui." }),
          /* @__PURE__ */ jsx("p", { children: "Nullam vitae ullamcorper turpis, nec dapibus lorem. Vivamus cursus quam libero, at posuere risus egestas quis. Proin at iaculis enim." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsx("img", { src: "/img/inicio_nosotros.jpg", className: "img-fluid", alt: "Sobre nosotros" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(card_viajes, { viajes: data.viajes }) }),
    /* @__PURE__ */ jsx(Discount_section, {}),
    /* @__PURE__ */ jsx(Testimonios_row, { testimonios: data.testimonios })
  ] });
}
function render(data) {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx(Inicio, { data }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  );
  return { html };
}
export {
  render
};
