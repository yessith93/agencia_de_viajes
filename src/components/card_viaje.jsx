function card_viaje({viaje}) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
                <img className="card-img-top" src={`img/destinos_${viaje.imagen}.jpg`} alt="Card cap" />
                <div className="card-body">
                    <h2>{viaje.titulo}</h2>
                    <p>
                        <svg className="icon icon-tabler icon-tabler-calendar-event" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#dc135f" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="5" width="16" height="16" rx="2" />
                            <line x1="16" y1="3" x2="16" y2="7" />
                            <line x1="8" y1="3" x2="8" y2="7" />
                            <line x1="4" y1="11" x2="20" y2="11" />
                            <rect x="8" y="15" width="2" height="2" />
                        </svg>
                        {viaje.fecha_ida} - {viaje.fecha_vuelta}
                    </p>
                    <p>
                        <svg className="icon icon-tabler icon-tabler-users" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#dc135f" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg>
                        {viaje.disponibles} Disponibles
                    </p>
                    <p>{viaje.descripcion.substr(0, 100)}...</p>
                    <a href={`viajes/${viaje.slug}`} className="btn btn-success btn-block">Más Información</a>
                </div>
            </div>
        </div>

    );
}

export default card_viaje;