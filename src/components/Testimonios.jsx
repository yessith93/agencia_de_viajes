import { json } from "sequelize";

function Testimonios({ data }) {
    const errores = data?.data?.errores;
    const nombre = data?.data?.nombre;
    const correo = data?.data?.correo;
    const mensaje = data?.data?.mensaje;
    const { testimonios } = data.data;
    console.log(data)
    return (

        <main className="container mt-5">
            <div className="row testimoniales">
                {testimonios && testimonios.map(testimonio => (
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
                ))}
            </div>
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
                                    <input id="nombre" className="form-control" type="text" placeholder="Tu Nombre" name="nombre" defaultValue={nombre} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="correo">Correo Electrónico</label>
                                    <input id="correo" className="form-control" type="email" placeholder="Tu Correo Electrónico" name="correo" defaultValue={correo} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje</label>
                                    <textarea id="mensaje" className="form-control" name="mensaje" rows={3} placeholder="Tu Mensaje" defaultValue={mensaje} required/>
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