import { json } from "sequelize";

function Testimonios({ data }) {
    const errores = data?.data?.errores;
    const nombre = data?.data?.nombre;
    const correo = data?.data?.correo;
    const mensaje = data?.data?.mensaje;
    return (

        <main className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center">Agrega un Testimonial </h2>
                    {errores && errores.map(error => (
                        <div key={error} className="alert alert-danger text-center">{error}</div>
                    ))}
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <form action="/testimonios" method="post">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input id="nombre" className="form-control" type="text" placeholder="Tu Nombre" name="nombre" value={nombre} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="correo">Correo Electrónico</label>
                                    <input id="correo" className="form-control" type="email" placeholder="Tu Correo Electrónico" name="correo" value={correo} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje</label>
                                    <textarea id="mensaje" className="form-control" name="mensaje" rows={3} placeholder="Tu Mensaje" value={mensaje} required/>
                                </div>
                                <input className="btn btn-success btn-block" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </main>

    );
}

export default Testimonios;