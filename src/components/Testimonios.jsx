import { json } from "sequelize";

function Testimonios({ data }) {
    return (

        <main className="container mt-5">
            <div className="row">
                {/* Aquí se incluye el contenido de los testimonios */}
                {/* <Testimoniales /> */}
                {data?.data?.errores ? (
                    <div>
                        {JSON.stringify(data.data.errores)} 
                    </div>

                ):(
                    <div className="col-md-12">
                        <h2 className="text-center">Agrega un Testimonial {JSON.stringify(data)}</h2>
                        {/* {errores && errores.map(error => (
                            <div key={error.id} className="alert alert-danger text-center">{error.mensaje}</div>
                        ))} */}
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <form action="/testimonios" method="post">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input id="nombre" className="form-control" type="text" placeholder="Tu Nombre" name="nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="correo">Correo Electrónico</label>
                                        <input id="correo" className="form-control" type="email" placeholder="Tu Correo Electrónico" name="correo" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mensaje">Mensaje</label>
                                        <textarea id="mensaje" className="form-control" name="mensaje" rows={3} placeholder="Tu Mensaje" />
                                    </div>
                                    <input className="btn btn-success btn-block" type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                )
                }
                
            </div>
        </main>

    );
}

export default Testimonios;