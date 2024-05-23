function Testimonios_list(props) {
    const testimonios = props.testimonios;
    return (testimonios && testimonios.map(testimonio => (
        <div key={testimonio.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <blockquote className="blockquote">
                        <p className="mb-0">{testimonio.mensaje}</p>
                    </blockquote>
                    <footer className="blockquote-footer">{testimonio.nombre}</footer>
                </div>
            </div>
        </div>
    )));
}

export default Testimonios_list;