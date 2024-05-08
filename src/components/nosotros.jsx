function Nosotros({title}) {
    return ( 
        <>
        <main className="container mt-5">
    <div className="row">
        <div className="col-md-5">
            <img src="img/nosotros.jpg" alt="imagen sobre nosotros" className="img-fluid"/>
        </div>
        <div className="col-md-7">
            <h1>{title}</h1>
            <blockquote>
                Fusce fringilla posuere nunc sed porttitor. Phasellus interdum consectetur bibendum. Aliquam accumsan libero eu sem pharetra, quis facilisis magna finibus. Nulla rutrum, massa in lobortis gravida, neque diam elementum nisl, a malesuada augue lacus eget eros. Mauris blandit lacus vel bibendum rhoncus. Donec sit amet arcu sit amet leo porttitor commodo. Proin eros nunc, lobortis quis arcu id, consequat aliquet ante. Donec pellentesque orci vitae urna ornare vehicula.
            </blockquote>
            <p>
                Donec tempor malesuada ligula in pharetra. Integer lobortis tincidunt pellentesque. Fusce bibendum semper lectus, commodo ultricies urna consectetur id. Donec in elit malesuada libero fringilla feugiat. Vestibulum vitae libero luctus, commodo sapien vel, semper ex. Vestibulum commodo nec est sed aliquam.
            </p>
            <p>
                Proin ultricies purus quis est placerat, et faucibus neque placerat. Aliquam sodales odio tellus, in imperdiet lacus condimentum in. Morbi a dignissim orci. Quisque id risus nibh. Ut sit amet tortor lacus. Pellentesque volutpat, turpis at euismod finibus, augue odio ornare risus, sed fermentum neque arcu et justo. Fusce molestie pharetra elit, in vestibulum ligula sagittis nec.
            </p>
        </div>
    </div>
</main>
<div className="listado-iconos">
    <div className="container mt-5 py-5 text-center">
        <div className="row">
            <div className="col-md-4">
                <img src="img/icono_seguridad.svg" alt="icono seguridad" className="img-fluid mb-4"/>
                <h2 className="mb-4">Seguridad</h2>
                <p>Pellentesque volutpat, turpis at euismod finibus, augue odio ornare risus, sed fermentum neque arcu et justo. Fusce molestie pharetra elit, in vestibulum ligula sagittis nec.</p>
            </div>
            <div className="col-md-4">
                <img src="img/icono_destinos.svg" alt="icono destinos" className="img-fluid mb-4"/>
                <h2 className="mb-4">Mejores Destinos</h2>
                <p>Pellentesque volutpat, turpis at euismod finibus, augue odio ornare risus, sed fermentum neque arcu et justo. Fusce molestie pharetra elit, in vestibulum ligula sagittis nec.</p>
            </div>
            <div className="col-md-4">
                <img src="img/icono_precios.svg" alt="icono precios" className="img-fluid mb-4"/>
                <h2 className="mb-4">Los Mejores Precios</h2>
                <p>Pellentesque volutpat, turpis at euismod finibus, augue odio ornare risus, sed fermentum neque arcu et justo. Fusce molestie pharetra elit, in vestibulum ligula sagittis nec.</p>
            </div>
        </div>
    </div>
</div>

        </>
     );
}

export default Nosotros
;